<!-- Don't delete it -->
<div name="readme-top"></div>

<!-- Organization Logo -->
<div align="center" style="display: flex; align-items: center; justify-content: center; gap: 16px;">
  <img alt="AOSSIE" src="public/aossie-logo.svg" width="175">
  
</div>

&nbsp;

<!-- Organization Name -->
<div align="center">



<!-- Correct deployed url to be added -->

</div>

<!-- Organization/Project Social Handles -->
<p align="center">
<!-- Telegram -->
<a href="https://t.me/StabilityNexus">
<img src="https://img.shields.io/badge/Telegram-black?style=flat&logo=telegram&logoColor=white&logoSize=auto&color=24A1DE" alt="Telegram Badge"/></a>
&nbsp;&nbsp;
<!-- X (formerly Twitter) -->
<a href="https://x.com/aossie_org">
<img src="https://img.shields.io/twitter/follow/aossie_org" alt="X (formerly Twitter) Badge"/></a>
&nbsp;&nbsp;
<!-- Discord -->
<a href="https://discord.gg/hjUhu33uAn">
<img src="https://img.shields.io/discord/1022871757289422898?style=flat&logo=discord&logoColor=white&logoSize=auto&label=Discord&labelColor=5865F2&color=57F287" alt="Discord Badge"/></a>
&nbsp;&nbsp;
<!-- Medium -->
<a href="https://news.stability.nexus/">
  <img src="https://img.shields.io/badge/Medium-black?style=flat&logo=medium&logoColor=black&logoSize=auto&color=white" alt="Medium Badge"></a>
&nbsp;&nbsp;
<!-- LinkedIn -->
<a href="https://www.linkedin.com/company/aossie/">
  <img src="https://img.shields.io/badge/LinkedIn-black?style=flat&logo=LinkedIn&logoColor=white&logoSize=auto&color=0A66C2" alt="LinkedIn Badge"></a>
&nbsp;&nbsp;
<!-- Youtube -->
<a href="https://www.youtube.com/@StabilityNexus">
  <img src="https://img.shields.io/youtube/channel/subscribers/UCZOG4YhFQdlGaLugr_e5BKw?style=flat&logo=youtube&logoColor=white&logoSize=auto&labelColor=FF0000&color=FF0000" alt="Youtube Badge"></a>
</p>

---

<div align="center">
<h1>Smart Notes</h1>
</div>

Smart Notes is a privacy-focused desktop application for personal knowledge management.
It enables semantic search, automatic note linking, and AI-assisted querying of personal notes using Retrieval-Augmented Generation (RAG), all running locally on the user’s machine.

---

## 🚀 Features

- **Local AI-powered semantic search** across personal notes
- **RAG-based question answering** over a personal knowledge base
- **Markdown editor for structured note-taking**
- **Automatic note linking and knowledge graph exploration**
- **Fully offline architecture for privacy**

---

## 💻 Tech Stack

### Frontend

- Electron
- HTML / JavaScript
- React (planned)
- TipTap (planned markdown editor)

### Backend / Local Services

- Node.js

### AI / ML

- Transformers.js
- Ollama / llama.cpp
- Vector database (Chroma or similar)
- Retrieval-Augmented Generation (RAG)


---

## ✅ Project Checklist

- [ ] **The AI/ML components** (if applicable):
   - [ ] LLM/model selection and configuration are documented.
   - [ ] Prompts and system instructions are version-controlled.
   - [ ] Content safety and moderation mechanisms are implemented.
   - [ ] API keys and rate limits are properly managed.

---

## 🔗 Repository Links

1. [Main Repository](https://github.com/AOSSIE-Org/SmartNotes)


---

## 🏗️ Architecture Diagram

```
[Architecture Diagram Placeholder]
```

You can create architecture diagrams using:
- [Draw.io](https://draw.io)
- [Excalidraw](https://excalidraw.com)
- [Lucidchart](https://lucidchart.com)
- [Mermaid](https://mermaid.js.org) (for code-based diagrams)

Example structure to include:
- Frontend components
- Backend services
- Database architecture
- External APIs/services
- Data flow between components

---

## 🔄 User Flow

```
[User Flow Diagram Placeholder]
```

### Key User Journeys

1. **User Journey 1**: Description
   - Step 1
   - Step 2
   - Step 3

2. **User Journey 2**: Description
   - Step 1
   - Step 2
   - Step 3

3. **User Journey 3**: Description
   - Step 1
   - Step 2
   - Step 3

---

## 🍀 Getting Started

### Prerequisites

Before running Smart Notes locally, ensure the following are installed:

- Node.js (v18 or later)
- npm (comes with Node.js)
- Git

Electron is installed locally through `npm install`.

Optional (for future AI features):
- Ollama for running local LLM models


#### 1. Clone the Repository

```bash
git clone https://github.com/AOSSIE-Org/SmartNotes.git
cd SmartNotes
```

#### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

#### 3. Configure Environment Variables(.env.example)

Create a `.env` file in the root directory:

```env
# Optional: Path to local Ollama installation
OLLAMA_PATH=/usr/local/bin/ollama

# Optional: Local model name for RAG
LOCAL_MODEL=llama3
```

#### 4. Run the Development Server

Terminal 1:

```bash
npm run dev
```

Terminal 2:

```bash
npm run electron
```

#### 5. Verify the Desktop App

After running `npm run electron`, the Smart Notes desktop window should open.

For detailed setup instructions, please refer to our [Installation Guide](./docs/INSTALL_GUIDE.md) (if you have one).

---



## 🙌 Contributing

⭐ Don't forget to star this repository if you find it useful! ⭐

Thank you for considering contributing to this project! Contributions are highly appreciated and welcomed. To ensure smooth collaboration, please refer to our [Contribution Guidelines](./CONTRIBUTING.md).

---

## ✨ Maintainers

- Maintained by the AOSSIE team.

---

## 📍 License

This project is licensed under the GNU General Public License v3.0.
See the [LICENSE](LICENSE) file for details.

---

## 💪 Thanks To All Contributors

Thanks a lot for spending your time helping this project grow. Keep rocking 🥂

[![Contributors](https://contrib.rocks/image?repo=AOSSIE-Org/SmartNotes)](https://github.com/AOSSIE-Org/SmartNotes/graphs/contributors)

© 2025 AOSSIE 
