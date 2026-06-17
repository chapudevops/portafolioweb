export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-dark-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Darlin Josué Saldarriaga Cruz. Todos los derechos reservados.
        </p>
        <p className="text-sm text-text-muted">
          Hecho con <span className="text-primary">React</span> +{' '}
          <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
