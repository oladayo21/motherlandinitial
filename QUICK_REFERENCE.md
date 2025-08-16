# Motherland SC - Quick Reference

## 🚀 Start Development
```bash
make dev          # Start everything
make dev-cms      # CMS only
make dev-frontend # Frontend only
```

## 🔗 Access Points
- Frontend: http://localhost:4321
- CMS Admin: http://localhost:3000/admin
- API: http://localhost:3000/api
- GraphQL: http://localhost:3000/api/graphql-playground

## 📁 Project Structure
```
/
├── cms/          # Payload CMS (backend)
├── frontend/     # Astro (public site)
└── Makefile      # All commands
```

## 🎯 Current Tasks
1. Create Payload collections (Teams, Players, Matches, News)
2. Connect frontend to CMS API
3. Replace static content with dynamic data

## ⚡ Quick Commands
```bash
make install      # Install deps
make build        # Build all
make test         # Run tests
make format       # Format code
make mongo-shell  # MongoDB CLI
make clean        # Reset data
```

## 📝 Git Workflow
```bash
git checkout -b feature/name
# make changes
make test
git add .
git commit -m "feat: description"
git push
```

## ⚠️ Remember
- Use `pnpm`, never `npm`
- Check Makefile first
- MongoDB has no auth (dev only)
- Multiple node_modules is normal