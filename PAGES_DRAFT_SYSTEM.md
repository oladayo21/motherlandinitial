# Pages Draft & Publishing System

## Overview
The Pages collection now uses Payload CMS's built-in draft and versioning system instead of a custom status field.

## Key Features

### 1. Draft/Published States
- **Draft**: Work in progress, not visible on the frontend
- **Published**: Live and visible to visitors
- Managed automatically by Payload CMS

### 2. Version History
- Keeps last 10 versions of each page
- Compare versions
- Restore previous versions
- See who made changes and when

### 3. Timestamps
- `createdAt`: Automatically set when page is created
- `updatedAt`: Automatically updated on every save

## How It Works

### Creating a New Page
1. Click "Create New Page"
2. Add your content blocks
3. By default, the page is saved as a **Draft**
4. Click "Save Draft" to save without publishing
5. Click "Publish" to make it live

### Working with Drafts
- Edit content without affecting the live version
- Preview drafts before publishing
- Schedule publishing (if configured)
- Multiple team members can work on drafts

### Publishing Workflow
```
Draft → Review → Publish → Live
```

### Admin UI Changes
- **Status Column**: Shows `Draft` or `Published`
- **Publish Button**: Appears when viewing a draft
- **Unpublish Button**: Appears when viewing published content
- **Version History**: Access from the sidebar

## API Access

### Fetching Only Published Pages
```javascript
// Frontend API call
const pages = await fetch('/api/pages?where[_status][equals]=published')
```

### Fetching Draft for Preview
```javascript
// With proper authentication
const draft = await fetch('/api/pages/[id]?draft=true')
```

## Benefits Over Custom Status Field

| Feature | Custom Status Field | Payload Drafts |
|---------|-------------------|----------------|
| Version History | ❌ Manual | ✅ Automatic |
| Preview Links | ❌ Custom build | ✅ Built-in |
| Rollback | ❌ Not available | ✅ One-click |
| Audit Trail | ❌ Manual | ✅ Automatic |
| API Filtering | ⚠️ Manual | ✅ Built-in |
| UI Integration | ⚠️ Custom | ✅ Native |

## Best Practices

1. **Always Save as Draft First**: Review before publishing
2. **Use Meaningful Version Names**: When saving major changes
3. **Preview Before Publishing**: Use the preview feature
4. **Regular Publishing**: Don't let drafts accumulate
5. **Version Cleanup**: Periodically review old versions

## Configuration

```typescript
// In Pages collection
versions: {
  drafts: true,        // Enable draft functionality
  maxPerDoc: 10,       // Keep 10 versions max
}
timestamps: true       // Add createdAt/updatedAt
```

## Frontend Integration

Your Astro frontend should:
1. Only fetch published pages for public routes
2. Implement preview routes for drafts (with auth)
3. Handle 404s for unpublished pages
4. Cache published content appropriately