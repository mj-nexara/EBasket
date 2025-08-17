export default function Footer() {
  return (
<footer className="bg-gray-50 border-t mt-16">
  <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-600 space-y-4">
    <p>© 2025 EthicBasket. Commerce With Conscience.</p>

    <div className="flex justify-center space-x-6">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>

    <div className="flex justify-center space-x-6">
      <a href="/terms">Terms of Service</a>
      <a href="/privacy">Privacy Policy</a>
    </div>
  </div>
</footer>
  );
}
