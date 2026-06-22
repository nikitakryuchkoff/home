import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="section" aria-labelledby="nf-h">
        <div className="container">
          <div className="page-hero-inner">
            <span className="micro">[ 404 · СТРАНИЦА НЕ НАЙДЕНА ]</span>
            <h1 id="nf-h" className="h-display page-hero-h">
              Такой страницы нет.
            </h1>
            <p className="lede page-hero-lede">
              Возможно, ссылка устарела или адрес введён с ошибкой. Вернитесь на главную или
              посмотрите услуги и стоимость.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <Link href="/" className="btn btn-primary">
                На главную <span className="arrow">→</span>
              </Link>
              <Link href="/services" className="btn">
                Услуги <span className="arrow">→</span>
              </Link>
              <Link href="/pricing" className="btn">
                Стоимость <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
