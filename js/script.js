{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Імпорт у Blender",
      "type": "shell",
      "command": "python",
      "args": [
        "scripts/import_blender.py"
      ],
      "group": "build",
      "presentation": {
        "reveal": "always"
      }
    },
    {
      "label": "Експорт у GDevelop",
      "type": "shell",
      "command": "python",
      "args": [
        "scripts/export_gdevelop.py"
      ],
      "group": "build",
      "presentation": {
        "reveal": "always"
      }
    },
    {
      "label": "Публікація на itch.io",
      "type": "shell",
      "command": "butler",
      "args": [
        "push",
        "game-build/",
        "your-itch-username/faithwars:html5"
      ],
      "group": "build",
      "presentation": {
        "reveal": "always"
      }
    }
  ]
}
