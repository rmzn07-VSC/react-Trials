import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostPreview from './PostPreview';
import axios from 'axios';

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state eklendi

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        console.log(response.data); // API yanıtını kontrol et

        if (!Array.isArray(response.data)) { // Yanıtın bir dizi olup olmadığını kontrol et
          throw new Error('API posts array dönmedi.');
        }
        setPosts(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Postları alırken hata:', error);
      } finally {
        setLoading(false); // Loading state'i false yap
      }
    };

    fetchPosts();
  }, []);

  // Koşullu render: önce hata, sonra yükleniyor, sonra postlar
  if (error) {
    return <p style={{ color: 'red' }}>Hata: {error}</p>;
  }

  if (loading) {  // Loading state kontrolü eklendi
    return <p>Yükleniyor...</p>;
  }

  // Postların boş olup olmadığını kontrol et
  if (posts.length === 0) {
    return <p>Hiç post bulunamadı.</p>;
  }

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <PostPreview post={post} />
        </Link>
      ))}
    </div>
  );
}

BlogList.propTypes = { // Prop validation düzeltildi
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default BlogList;
