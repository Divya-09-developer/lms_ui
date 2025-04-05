

export default function PageLinksTwo() {
  return (
    <div className="breadcrumbs mt-10 pt-0 pb-0">
      <div className="breadcrumbs__content">
        <div className="breadcrumbs__item">
          <a href="/">Home</a>
        </div>
        <div className="breadcrumbs__item">
          <a href="/courses-list-3">All courses</a>
        </div>
        <div className="breadcrumbs__item">
          <a href={`/courses/${5}`}>User Experience Design</a>
        </div>
        <div className="breadcrumbs__item">
          <a href={`/courses/${3}`}>User Interface</a>
        </div>
      </div>
    </div>
  );
}
