# Ediversa Prueba Técnica - Frontend Developer 

Este proyecto he desarrollado como monorepo con Turborepo.
- Aplicación principal(apps/web) con Next.js + TypeScript.
- Librería UI (packages/ui) con componentes reutilizables y estilos con CSS Modules.
- Documentación de componentes con Storybook.
- Testing básico con Vitest.
- Integración con Pokémon API.


## 🗂️ Estructura del proyecto

├── apps/
│   └── web/          # ← Aplicación principal (Next.js)
│        └── app/             # ← Páginas de la app
│        └── lib/             # ← Integración con la Pokemon API
│        └── types/           # ← Types de TypeScript
│
├── packages/
│   └── ui/           # ← Librería de componentes reutilizables
│        └── src/
│            └── components/          # ← Cada componente
│            └── stories/             # ← Códigos para Storybook
│
├── package.json      # Configuración del monorepo
└── turbo.json        # Configuración de Turborepo


## 🚀 Instalación 

### Prerequisites
- Node.js >= 18 (Desarollado con v22.19.0)
- [pnpm](https://pnpm.io/)

1. Clone the repository
```
git clone https://github.com/inamin-kana/ediversa-monorepo.git
cd ediversa-monorepo
```

2. Instalar dependencias (monorepo)
```
pnpm install
```


## 🛠️ Compilación

### Librería UI (packages/ui)
```
pnpm --filter @repo/ui build
```

### Aplicación Next.js (apps/web)
```
pnpm --filter @repo/web build
```


## ⚙️ Ejecución

### Web App 
Desde la raíz de apps/web
```
pnpm dev
```
Desde la raíz del proyecto
```
pnpm --filter @repo/web dev
```
La aplicación estará disponible en `http://localhost:3000/`

### Librería de componentes
Desde la raíz de packages/ui  
```
pnpm dev
```
Desde la raíz del proyecto

```
pnpm --filter @repo/ui dev
```

### Storybook
Desde la raíz del packages/ui  
```
pnpm storybook
```
Storybook estará disponible en `http://localhost:6006`

### Testing
Desde la raíz de packages/ui  

```
# Unit test de UI
pnpm vitest run --project unit  

# Unit test + coverage de UI
pnpm vitest run --project unit --coverage
```

```
# api test
pnpm -C apps/web test     

# api test + coverage
pnpm vitest run --coverage
```

### Biome