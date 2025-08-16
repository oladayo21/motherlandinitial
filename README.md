# Motherland SC - Official Website Monorepo

A modern monorepo for Motherland SC football club, featuring a Payload CMS backend and Astro frontend.

## 🏗️ Architecture

```
motherlandsc/
├── cms/                    # Payload CMS backend
│   ├── collections/       # Content models
│   ├── src/              # Next.js app
│   └── docker-compose.yml # MongoDB setup
├── frontend/              # Astro frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── layouts/      # Page layouts
│   │   └── pages/        # Routes
│   └── public/           # Static assets
├── package.json          # Root workspace config
├── pnpm-workspace.yaml   # Workspace definition
└── Makefile             # Development commands
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+
- Docker Desktop (for MongoDB)

### Installation

```bash
# Install all dependencies
make install

# Start development environment
make dev
```

This will start:
- MongoDB (Docker) on port 27017
- Payload CMS on http://localhost:3000
- Astro frontend on http://localhost:4321

## 📋 Available Commands

### Development

```bash
make dev            # Start full stack (MongoDB, CMS, Frontend)
make dev-cms        # Start CMS + MongoDB only
make dev-frontend   # Start frontend only
make dev-docker     # Run everything in Docker
```

### Build & Deploy

```bash
make build          # Build all packages
make build-cms      # Build CMS only
make build-frontend # Build frontend only
```

### Database

```bash
make mongo-shell    # Connect to MongoDB shell
make mongo-backup   # Create database backup
make mongo-restore  # Restore from backup
```

### Maintenance

```bash
make test          # Run all tests
make lint          # Run linters
make format        # Format code
make clean         # Remove Docker volumes (⚠️ deletes data)
make clean-deps    # Remove all node_modules
```

## 🔗 Service URLs

- **Frontend**: http://localhost:4321
- **CMS Admin**: http://localhost:3000/admin
- **CMS API**: http://localhost:3000/api
- **MongoDB**: mongodb://localhost:27017/motherlandsc-cms

## 📦 Tech Stack

### Backend (CMS)
- Payload CMS 3.52
- Next.js 15.4
- MongoDB 7.0
- TypeScript

### Frontend
- Astro 5.12
- Tailwind CSS 4.1
- TypeScript

### Infrastructure
- pnpm workspaces
- Docker & Docker Compose
- Make for task automation

## 🏃 Development Workflow

1. **Start services**: `make dev`
2. **Make changes** in either `cms/` or `frontend/`
3. **Hot reload** automatically applies changes
4. **Test**: `make test`
5. **Build**: `make build`

## 📝 Environment Variables

### CMS (.env)
```bash
DATABASE_URI=mongodb://localhost:27017/motherlandsc-cms
PAYLOAD_SECRET=your-secret-key
```

### Frontend (.env)
```bash
PUBLIC_CMS_URL=http://localhost:3000
PUBLIC_API_URL=http://localhost:3000/api
```

## 🐳 Docker Setup

MongoDB runs in Docker for consistent development. The configuration is in `cms/docker-compose.yml`.

To manage MongoDB:
```bash
make up-mongo      # Start MongoDB
make down          # Stop all containers
make mongo-shell   # Access MongoDB shell
```

## 📚 Documentation

- [Payload CMS Setup](cms/MONGODB_SETUP.md)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [Astro Docs](https://docs.astro.build)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `make test`
4. Format code: `make format`
5. Create pull request

## 📄 License

Private repository - All rights reserved