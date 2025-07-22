# 🎨 Renk Paleti - AI ile Güçlendirilmiş Renk Üreticisi

> **Yapay zeka teknolojisi ile istediğiniz her konsept için mükemmel renk paletleri oluşturun!**

## ✨ Özellikler

- 🤖 **AI Powered**: OpenAI GPT-4 ile desteklenen akıllı renk üretimi
- ⚡ **Anında Sonuç**: Hızlı ve etkili renk paleti oluşturma
- 🎯 **Akıllı Öneriler**: Konseptinize uygun renk harmonileri
- 📱 **Tam Responsive**: Mobil, tablet ve desktop uyumlu
- 💾 **4K İndirme**: Paletlerinizi yüksek kalitede kaydedin
- 🎉 **Tek Tıkla Kopyalama**: Hex kodlarını anında kopyalayın
- 🇹🇷 **Türkçe Arayüz**: Tam Türkçe dil desteği
- ✨ **Modern UI**: Glassmorphism ve 3D efektlerle görsel şölen

## 🚀 Teknolojiler

- **Frontend**: Next.js 15, TypeScript
- **Styling**: Tailwind CSS, Custom Animations
- **AI**: OpenAI GPT-4o API

## 📂 Proje Yapısı

```
ColorPalette/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate-palette/
│   │   │       └── route.ts          # API endpoint
│   │   ├── globals.css               # Global stiller
│   │   ├── layout.tsx                # Ana layout
│   │   └── page.tsx                  # Ana sayfa
│   └── components/
│       ├── Hero.tsx                  # Hero section
│       ├── ColorPaletteGenerator.tsx # Ana form
│       ├── ColorDisplay.tsx          # Renk gösterimi
│       └── Footer.tsx                # Footer
├── public/                           # Statik dosyalar
├── package.json
└── README.md
```

## 📦 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn
- OpenAI API anahtarı

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/berkcangumusisik/ColorPalette.git
cd ColorPalette
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Ortam değişkenlerini ayarlayın**
```bash
# .env.local dosyası oluşturun
echo "OPENAI_API_KEY=your_openai_api_key_here" > .env.local
```

4. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
# veya
yarn dev
```

5. **Tarayıcınızda açın**
```
http://localhost:3000
```

---

**🎨 Hayal gücünüzün sınırlarını aşın ve renklerle büyülü dünyalar yaratın! ✨**
