const ActiveProject = () => (
  <div>
    <h2>Subcity.org v3.0.1 -- Platform redesign</h2>
    <p>
      Long time due for <a href="https://www.subcity.org">subcity.org</a>
      redesign after several discussions during meetings regarding current short
      comings of site. Action points:
    </p>
    <ul className="body-list">
      <li>New UI design for the site.</li>
      <li>Python3.7</li>
      <li>Django 2.1.1</li>
      <li>
        Branch out applications on the site. (New Guide, Blog and Archives)
      </li>
    </ul>
    <style jsx>
      {`
        .body-list li {
          list-style-type: disc;
        }
      `}
    </style>
  </div>
);

export default ActiveProject;
