# Simple MongoDB Docker Setup for Payload CMS

## Prerequisites

1. **Docker Desktop** must be installed and running
   - Download from: https://www.docker.com/products/docker-desktop/
   - After installation, ensure Docker Desktop is running (check for the whale icon in your menu bar)

2. **pnpm** package manager (already configured in this project)

## Quick Start

1. **Start Docker Desktop** (if not already running)

2. **Start MongoDB container**:
   ```bash
   make up-mongo
   ```
   Or start all services (MongoDB + Payload CMS):
   ```bash
   make up
   ```

3. **Verify MongoDB is running**:
   ```bash
   make status
   ```

## Available Commands

All commands are available through the Makefile in the root directory:

- `make up` - Start all services (MongoDB + Payload CMS)
- `make up-mongo` - Start only MongoDB
- `make down` - Stop all services
- `make restart` - Restart all services
- `make logs-mongo` - View MongoDB logs
- `make mongo-shell` - Connect to MongoDB shell
- `make mongo-backup` - Create a database backup
- `make clean` - Remove all containers and data (⚠️ destructive)

## Connection Details

### Development Environment (No Authentication)
- **Host**: `localhost` (from your machine) or `mongo` (from within Docker network)
- **Port**: `27017`
- **Database**: `motherlandsc-cms`
- **Connection String**: `mongodb://localhost:27017/motherlandsc-cms` (from host)
- **Connection String**: `mongodb://mongo:27017/motherlandsc-cms` (from Docker containers)

## MongoDB GUI Tools

You can connect to MongoDB using GUI tools:

1. **MongoDB Compass** (Official GUI)
   - Download: https://www.mongodb.com/products/compass
   - Connection string: `mongodb://localhost:27017/motherlandsc-cms`

2. **Studio 3T**
   - Download: https://studio3t.com/
   - Use the same connection details as above

## Configuration Files

- `.env` - Environment variables (contains MongoDB connection string)
- `docker-compose.yml` - Main Docker Compose configuration

## Troubleshooting

### Docker daemon is not running
```bash
# macOS: Start Docker Desktop from Applications
# Linux: sudo systemctl start docker
# Windows: Start Docker Desktop from Start Menu
```

### Port 27017 is already in use
```bash
# Find what's using the port
lsof -i :27017

# Stop the conflicting service or change the port in docker-compose.yml
```

### Permission denied errors
```bash
# Ensure Docker Desktop is running with proper permissions
# On Linux, add your user to the docker group:
sudo usermod -aG docker $USER
# Then log out and back in
```

### MongoDB container keeps restarting
```bash
# Check logs for errors
make logs-mongo

# Common issues:
# - Corrupted data volume: run `make clean` and start fresh
# - Invalid initialization script: check mongo-init/*.js files
```

## Production Considerations

Before deploying to production:

1. **Enable MongoDB authentication** (required for production)
2. **Use MongoDB Atlas** or a managed database service for production
3. **Set up regular backups** using `make mongo-backup` or automated solutions
4. **Configure proper resource limits** in docker-compose.yml
5. **Use environment-specific .env files** (.env.production, .env.staging)
6. **Never run without authentication in production**