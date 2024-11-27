import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const { postId } = useParams(); // URL'den postId'yi yakala
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`);
        setPost(response.data);
      } catch (err) {
        setError("Post detayları yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]); // postId değiştiğinde bu useEffect tetiklenir

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} style={{ maxWidth: "100%" }} />
      <p>{post.shortDescription}</p>
      <div>{post.content}</div>
    </div>
  );
}

export default PostDetail;
