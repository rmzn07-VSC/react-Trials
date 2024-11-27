const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3001;

const pool = mysql.createPool({ // bağlantı havuzu
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // bağlantı limiti
  queueLimit: 0,
});
app.get('/api/health', (req, res) => {
    res.send('Sağlıklı');
  });
  
  
  app.get('/api/posts', async (req, res) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM posts');
      if(!rows || rows.length===0){
          return res.json([]); // boş dizi döndür
      }
      res.json(rows);
    } catch (error) {
      console.error('Postları alırken hata:', error);
      res.status(500).json({ error: 'Postları alırken hata oluştu.' });
    }
  });   

app.use(cors());
app.use(bodyParser.json());


//Sağlık kontrolü (GET isteği):
app.get('/api/health', (req, res)=>{
    res.send("sağlıklı")
})


app.get('/api/posts', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM posts');
    res.json(rows);
  } catch (error) {
    console.error('Postları alırken hata:', error);
    res.status(500).json({ error: 'Postları alırken hata oluştu.' });
  }
});

//Sunucuyu kapatırken havuzdaki tüm bağlantıları kapatır
process.on('SIGINT', async () => {
    console.log('Sunucu kapatılıyor...');
    await pool.end();
    console.log('Sunucu kapatıldı!');
    process.exit();
  });

  // Kategori listeleme (GET)
app.get('/api/categories', async (req, res) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM categories');
      res.json(rows);
    } catch (error) {
      console.error('Kategorileri alırken hata:', error);
      res.status(500).json({ error: 'Kategorileri alırken hata.' });
    }
  });
  
  //Yeni kategori ekleme (POST)
  app.post('/api/categories', async (req,res)=>{
      try{
          const {name,slug} = req.body;
          const [rows] = await pool.execute('INSERT INTO categories (name,slug) VALUES (?,?)',[name,slug]);
          res.json({id:rows.insertId,name,slug});
  
      } catch(error){
          console.error("Kategori eklerken hata", error);
          res.status(500).json({ error: 'Kategori eklenirken hata.'});
      }
  })
  
  
  // Kategori silme (DELETE)
  app.delete('/api/categories/:id', async (req, res) => {
      try {
        const categoryId = parseInt(req.params.id,10);
        const [rows] = await pool.execute('DELETE FROM categories WHERE id = ? ', [categoryId]);
          if (rows.affectedRows === 0) {
              return res.status(404).json({ error: 'Kategori bulunamadı.' });
            }
        res.json({message: 'Kategori silindi'})
      } catch (error) {
        console.error('Kategori silinirken hata:', error);
        res.status(500).json({ error: 'Kategori silinirken hata.' });
      }
    });

    // Etiket listeleme (GET)
app.get('/api/tags', async (req, res) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM tags');
      res.json(rows);
    } catch (error) {
      console.error('Etiketleri alırken hata:', error);
      res.status(500).json({ error: 'Etiketleri alırken hata.' });
    }
  });
  
  // Yeni etiket ekleme (POST)
  app.post('/api/tags', async (req, res) => {
    try {
      const { name, slug } = req.body;
      const [rows] = await pool.execute('INSERT INTO tags (name, slug) VALUES (?, ?)', [name, slug]);
      res.json({ id: rows.insertId, name, slug });
    } catch (error) {
      console.error('Etiket eklerken hata:', error);
      res.status(500).json({ error: 'Etiket eklenirken hata.' });
    }
  });
  
  // Etiket silme (DELETE)
  app.delete('/api/tags/:id', async (req, res) => {
    try {
      const tagId = parseInt(req.params.id, 10);
      const [rows] = await pool.execute('DELETE FROM tags WHERE id = ?', [tagId]);
      if (rows.affectedRows === 0) {
        return res.status(404).json({ error: 'Etiket bulunamadı.' });
      }
      res.json({ message: 'Etiket silindi' });
    } catch (error) {
      console.error('Etiket silinirken hata:', error);
      res.status(500).json({ error: 'Etiket silinirken hata.' });
    }
  });

  // Yorum ekleme (POST)
app.post('/api/comments', async (req, res) => {
    try {
      const { postId, content } = req.body;
      const [rows] = await pool.execute(
        'INSERT INTO comments (post_id, content) VALUES (?, ?)',
        [postId, content]
      );
      res.json({ id: rows.insertId, postId, content });
    } catch (error) {
      console.error('Yorum eklerken hata:', error);
      res.status(500).json({ error: 'Yorum eklenirken hata.' });
    }
  });
  
  // Belirli bir yazının yorumlarını listeleme (GET)
  app.get('/api/comments/:postId', async (req, res) => {
    try {
      const postId = parseInt(req.params.postId, 10);
      const [rows] = await pool.execute('SELECT * FROM comments WHERE post_id = ?', [postId]);
      res.json(rows);
    } catch (error) {
      console.error('Yorumları alırken hata:', error);
      res.status(500).json({ error: 'Yorumları alırken hata.' });
    }
  });


app.listen(port, () => console.log(`API ${port} portunda dinliyor`));