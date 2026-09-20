const express=require('express');
const app=express();
const PORT=process.env.PORT||10000;

app.get('/',(req,res)=>{res.send(`<!DOCTYPE html>
<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Boutique Ivoire EU</title>
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@700&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#FFF8F0;text-align:center;padding:15px;font-family:Poppins,sans-serif}
.logo{font-family:'Fredoka One',cursive;font-size:70px;line-height:0.9;margin-top:20px}
.b{color:#FF7A00;text-shadow:4px 4px 0 #fff, -4px -4px 0 #fff}
.i{color:#0E8A3E;text-shadow:4px 4px 0 #fff, -4px -4px 0 #fff}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:520px;margin:25px auto}
.card{background:#fff;border-radius:18px;padding:15px;border-left:6px solid #FF7A00;border-right:6px solid #0E8A3E;box-shadow:0 6px 18px rgba(0,0,0,.08)}
.btn{background:#25D366;color:#fff;padding:16px 32px;border-radius:50px;text-decoration:none;font-weight:700;font-size:18px;display:inline-block;margin-top:20px}
</style></head><body>
<div class="logo"><div class="b">Boutique</div><div class="i">Ivoire</div></div>
<div style="font-size:11px;letter-spacing:4px;color:#8B5A2B;font-weight:700;margin-top:6px">ORANGE BLANC VERT • ARTISANAL</div>
<div class="grid">
<div class="card">🌿<br><b>Karité</b><br>Korhogo<br><b style="color:#0E8A3E">4500 F</b></div>
<div class="card">🫒<br><b>Huile Rouge</b><br>Man<br><b style="color:#0E8A3E">3000 F/L</b></div>
<div class="card">👘<br><b>Pagnes</b><br>Baoulé<br><b style="color:#0E8A3E">15000 F</b></div>
<div class="card">🥜<br><b>Arachide</b><br>Nord<br><b style="color:#0E8A3E">2500 F/kg</b></div>
</div>
<a class="btn" href="https://wa.me/2250700000000">💬 Commander WhatsApp</a>
</body></html>`)});
app.listen(PORT,()=>console.log('LIVE'));
