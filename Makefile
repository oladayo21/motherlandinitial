# Motherlandsc Monorepo Makefile
.PHONY: help up down restart logs mongo-shell mongo-backup mongo-restore clean dev build test lint format

# Default target - show help
help:
	@echo "=== Motherland SC Monorepo Commands ==="
	@echo ""
	@echo "🚀 Development:"
	@echo "  make dev             - Start full stack (MongoDB, CMS, Frontend)"
	@echo "  make dev-cms         - Start MongoDB + CMS only"
	@echo "  make dev-frontend    - Start frontend only"
	@echo "  make dev-docker      - Start everything in Docker"
	@echo ""
	@echo "📦 MongoDB:"
	@echo "  make up-mongo        - Start only MongoDB container"
	@echo "  make down            - Stop all Docker services"
	@echo "  make mongo-shell     - Connect to MongoDB shell"
	@echo "  make mongo-backup    - Backup MongoDB database"
	@echo "  make mongo-restore   - Restore MongoDB database"
	@echo ""
	@echo "🛠️  Build & Test:"
	@echo "  make build           - Build all packages"
	@echo "  make build-cms       - Build CMS only"
	@echo "  make build-frontend  - Build frontend only"
	@echo "  make test            - Run all tests"
	@echo "  make lint            - Run linters"
	@echo "  make format          - Format code"
	@echo ""
	@echo "🔧 Utilities:"
	@echo "  make install         - Install all dependencies"
	@echo "  make clean           - Remove containers and volumes (WARNING: deletes data)"
	@echo "  make clean-deps      - Remove all node_modules"
	@echo "  make status          - Show Docker container status"
	@echo "  make logs            - Show Docker logs"
	@echo "  make logs-mongo      - Show MongoDB logs"

# Start all services
up:
	cd cms && docker-compose up -d
	@echo "✅ All services started"
	@echo "📦 Payload CMS: http://localhost:3000"
	@echo "🗄️  MongoDB: mongodb://localhost:27017"

# Start only MongoDB
up-mongo:
	cd cms && docker-compose up -d mongo
	@echo "✅ MongoDB started on port 27017"

# Stop all services
down:
	cd cms && docker-compose down
	@echo "✅ All services stopped"

# Restart all services
restart: down up

# Show logs for all services
logs:
	cd cms && docker-compose logs -f

# Show MongoDB logs
logs-mongo:
	cd cms && docker-compose logs -f mongo

# Connect to MongoDB shell
mongo-shell:
	cd cms && docker-compose exec mongo mongosh motherlandsc-cms

# Backup MongoDB database
mongo-backup:
	@echo "Creating MongoDB backup..."
	@mkdir -p backups
	cd cms && docker-compose exec -T mongo mongodump --db=motherlandsc-cms --archive --gzip > ../backups/mongo-backup-$$(date +%Y%m%d-%H%M%S).gz
	@echo "✅ Backup created in backups/ directory"

# Restore MongoDB database from backup
mongo-restore:
	@echo "Available backups:"
	@ls -la backups/*.gz 2>/dev/null || echo "No backups found"
	@echo ""
	@echo "To restore, run: cat backups/[backup-file] | docker-compose exec -T mongo mongorestore --archive --gzip"

# Clean up everything (WARNING: deletes all data)
clean:
	@echo "⚠️  WARNING: This will delete all containers and volumes (including data)"
	@echo "Press Ctrl+C to cancel, or Enter to continue..."
	@read confirm
	cd cms && docker-compose down -v
	@echo "✅ All containers and volumes removed"

# Development environment - Full stack (MongoDB, CMS, Frontend)
dev:
	@echo "🚀 Starting full stack development environment..."
	@echo "Starting MongoDB in Docker..."
	cd cms && docker-compose up -d mongo
	@echo "✅ MongoDB started"
	@echo "Installing dependencies if needed..."
	@pnpm install
	@echo "Starting CMS and Frontend..."
	pnpm run dev

# Development - CMS only
dev-cms:
	@echo "Starting MongoDB in Docker..."
	cd cms && docker-compose up -d mongo
	@echo "✅ MongoDB started"
	@echo "Starting Payload CMS..."
	pnpm run dev:cms

# Development - Frontend only
dev-frontend:
	@echo "Starting Astro frontend..."
	pnpm run dev:frontend

# Development environment (all in Docker)
dev-docker:
	cd cms && docker-compose up

# Build all packages
build:
	@echo "Building all packages..."
	pnpm run build

# Build CMS only
build-cms:
	@echo "Building CMS..."
	pnpm run build:cms

# Build frontend only
build-frontend:
	@echo "Building frontend..."
	pnpm run build:frontend

# Run tests
test:
	@echo "Running tests..."
	pnpm run test

# Run linters
lint:
	@echo "Running linters..."
	pnpm run lint

# Format code
format:
	@echo "Formatting code..."
	pnpm run format

# Show container status
status:
	cd cms && docker-compose ps

# Install all dependencies
install:
	@echo "Installing all dependencies..."
	pnpm install
	@echo "✅ All dependencies installed"
	@echo ""
	@echo "To start the development environment, run: make dev"

# Clean all node_modules
clean-deps:
	@echo "Removing all node_modules..."
	rm -rf node_modules cms/node_modules frontend/node_modules
	@echo "✅ All node_modules removed"