**all product pages** for EthicBasket with:

- ✅ Full routing using **App Router**
- 🛒 Product details: name, price, description, image
- 🖼️ Static image placeholders
- ➕ “Add to Cart” button (non-functional for now, but ready for integration)
- 🧭 Navigation between categories and products

---

## 🧱 Updated Folder Structure for Products

```
app/
└── three-pillars/
    ├── digital/
    │   ├── nexascend-cli/page.tsx
    │   ├── nex-api/page.tsx
    │   ├── nex-sdlc/page.tsx
    │   └── nex-oss/page.tsx
    ├── vital-assets/
    │   ├── lifefuel/page.tsx
    │   ├── symbolic-threads/page.tsx
    │   ├── essential-kits/page.tsx
    │   └── recovery-essence/page.tsx
    └── governance/
        ├── constitution-kit/page.tsx
        ├── nexvote/page.tsx
        ├── lumid-vault/page.tsx
        └── nexara-sdk/page.tsx
public/
└── images/
    ├── nexascend-cli.jpg
    ├── organic-honey.jpg
    ├── constitution-kit.jpg
    └── ebasket-tshirt.jpg
```

---

## 🧩 Sample Product Page Template

Here’s a reusable structure you can copy for each product:

### `app/three-pillars/digital/nexascend-cli/page.tsx`

```tsx
import Image from 'next/image';

export default function NexascendCLIPage() {
  return (
    <div>
      <h1>Nexascend CLI</h1>
      <p><strong>Price:</strong> $49.99</p>
      <Image src="/images/nexascend-cli.jpg" alt="Nexascend CLI" width={400} height={300} />
      <p>Advanced command-line interface for next-generation development workflows with integrated AI assistance.</p>
      <button>Add to Cart</button>
    </div>
  );
}
```

---

## 🛍️ All Product Pages (Summarized)

Here’s a quick reference for each product page you’ll create:

| Category         | Product Name         | Route Path                                                                 |
|------------------|----------------------|----------------------------------------------------------------------------|
| Digital          | Nexascend CLI        | `/three-pillars/digital/nexascend-cli`                                     |
| Digital          | Nex API              | `/three-pillars/digital/nex-api`                                           |
| Digital          | Nex SDLC             | `/three-pillars/digital/nex-sdlc`                                          |
| Digital          | Nex OSS              | `/three-pillars/digital/nex-oss`                                           |
| Vital Assets     | Lifefuel             | `/three-pillars/vital-assets/lifefuel`                                     |
| Vital Assets     | Symbolic Threads     | `/three-pillars/vital-assets/symbolic-threads`                             |
| Vital Assets     | Essential Kits       | `/three-pillars/vital-assets/essential-kits`                               |
| Vital Assets     | Recovery Essence     | `/three-pillars/vital-assets/recovery-essence`                             |
| Governance       | Constitution Kit     | `/three-pillars/governance/constitution-kit`                               |
| Governance       | NexVote              | `/three-pillars/governance/nexvote`                                        |
| Governance       | Lumid Vault          | `/three-pillars/governance/lumid-vault`                                    |
| Governance       | Nexara SDK           | `/three-pillars/governance/nexara-sdk`                                     |

---

## 🖼️ Example Image Setup

Place your product images in `public/images/` like:

```
public/images/nexascend-cli.jpg
public/images/organic-honey.jpg
public/images/constitution-kit.jpg
public/images/ebasket-tshirt.jpg
```

You can use placeholder images for now (e.g., from [https://picsum.photos](https://picsum.photos)).

---

