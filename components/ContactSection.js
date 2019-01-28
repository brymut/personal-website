const ContactSection = props => (
  <div>
    <p>{props.contactData.contactSummary}</p>
    <p>
      <i className="fab fa-github" />{" "}
      <a href={`https://${props.contactData.github}`}>
        {props.contactData.github}
      </a>
    </p>
    <p>
      <i className="fab fa-linkedin" />
      <a href={`https://${props.contactData.linkedin}`}>
        {props.contactData.linkedin}
      </a>
    </p>
  </div>
);

export default ContactSection;
