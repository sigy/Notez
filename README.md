# 🎵 Notez

Moderní webový editor notového zápisu s transpozicí a přehrávačem.

## ✨ Funkce

- 📚 **Předpřipravené písně** - Twinkle Twinkle, Happy Birthday, Mary Had a Little Lamb
- ✏️ **Interaktivní editor** - Vytvářejte vlastní melodie přidáváním not
- 🎨 **Krásné vykreslování** - Profesionální notový zápis pomocí VexFlow
- 🔄 **Transpozice** - Převádějte melodie do jiných tónin (+/- 6 půltónů)
- ▶️ **Přehrávání** - Poslechněte si své kompozice s Tone.js
- 🎚️ **Nastavitelné tempo** - 60-200 BPM
- 📱 **Responzivní design** - Funguje na mobilech i počítačích

## 🚀 Demo

**[Vyzkoušejte živé demo](https://sigy.github.io/Notez/)**

## 🛠️ Technologie

- **[VexFlow](https://www.vexflow.com/)** - Vykreslování notového zápisu
- **[Tone.js](https://tonejs.github.io/)** - Audio syntéza a přehrávání
- **Vanilla JavaScript** - Žádné frameworky
- **Shadcn/ui design** - Moderní UI komponenty

## 📖 Jak používat

### Načtení písně
1. Klikněte na záložku **"📚 Načíst píseň"**
2. Vyberte píseň z rozbalovacího menu
3. Klikněte **"Načíst píseň"**

### Vytvoření vlastní melodie
1. Klikněte na záložku **"✏️ Editor not"**
2. Vyberte notu (C, D, E, F, G, A, B) a délku (celá, půlová, čtvrťová, osminová)
3. Klikněte **"➕ Přidat notu"** (opakujte pro více not)
4. Klikněte **"🎨 Vykreslit noty"**

### Transpozice
1. V hlavičce notového zápisu vyberte požadovanou transpozici
2. Klikněte **"Použít"**
3. Noty se automaticky přepočítají do nové tóniny

### Přehrávání
1. Klikněte **"▶ Přehrát"** pro poslech melodie
2. Upravte tempo pomocí posuvníku (60-200 BPM)
3. Použijte **"⏹ Stop"** pro zastavení

## 💻 Lokální spuštění

```bash
# Klonovat repozitář
git clone https://github.com/sigy/Notez.git

# Přejít do složky
cd Notez

# Otevřít v prohlížeči
open index.html
```

Nebo použijte lokální server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# Poté otevřete http://localhost:8000
```

## 📝 Struktura projektu

```
Notez/
├── index.html    # Hlavní HTML soubor s UI
├── app.js        # JavaScript logika
└── README.md     # Dokumentace
```

## 🎼 Formát not

Aplikace používá VexFlow formát pro reprezentaci not:

```javascript
{
  keys: ["c/4"],     // Nota (c-g) / Oktáva (3-5)
  duration: "q"      // w=celá, h=půlová, q=čtvrťová, 8=osminová
}
```

## 🌟 Příklady použití

### Jednoduchá melodie
```javascript
const melody = [
  { keys: ["c/4"], duration: "q" },  // C čtvrťová
  { keys: ["d/4"], duration: "q" },  // D čtvrťová
  { keys: ["e/4"], duration: "q" },  // E čtvrťová
  { keys: ["f/4"], duration: "q" }   // F čtvrťová
];
```

## 🤝 Přispívání

Příspěvky jsou vítány! Pokud máte nápad na vylepšení:

1. Forkněte repozitář
2. Vytvořte feature branch (`git checkout -b feature/AmazingFeature`)
3. Commitněte změny (`git commit -m 'Add some AmazingFeature'`)
4. Pushněte do branch (`git push origin feature/AmazingFeature`)
5. Otevřete Pull Request

## 📄 Licence

Tento projekt je open source a dostupný pod [MIT licencí](LICENSE).

## 🙏 Poděkování

- **VexFlow** - Za skvělou knihovnu pro notový zápis
- **Tone.js** - Za výkonnou audio syntézu
- **Shadcn/ui** - Za inspiraci designem

## 📧 Kontakt

Máte dotazy nebo návrhy? Otevřete [issue](https://github.com/sigy/Notez/issues) na GitHubu.

---

Vytvořeno s ❤️ pomocí Claude Code
