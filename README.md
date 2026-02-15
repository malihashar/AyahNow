# 🌙 AyahNow

**AyahNow** is a simple and powerful application that allows users to instantly access Quranic ayahs (verses) in real-time. It provides clean text output and can be extended to include translations, audio recitations, and more.

> Built to make accessing the words of the Qur’an simple, fast, and accessible.

---

## ✨ Features

- 📖 Retrieve ayahs by Surah and Ayah number  
- 🔎 Quick and lightweight access  
- 🌍 Easily extendable for translations  
- 🔊 Optional audio recitation support  
- ⚡ Fast and simple setup  

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/malihashar/AyahNow.git
```

Navigate into the project directory:

```bash
cd AyahNow
```

Install dependencies (depending on your stack):

### If using Node.js:
```bash
npm install
npm start
```

### If using Python:
```bash
pip install -r requirements.txt
python app.py
```

---

## 📌 Usage Example

Example API request:

```
GET /ayah?surah=1&ayah=1
```

Example JSON response:

```json
{
  "surah": 1,
  "ayah": 1,
  "text": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
}
```

---

## ⚙️ Configuration

Create a `.env` file (if required):

```
PORT=3000
API_KEY=your_api_key_here
```

---

## 🛠️ Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Push your branch  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Support

If you find this project helpful, consider giving it a ⭐ on GitHub!
