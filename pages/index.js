import HomepageLayout from "../components/HomepageLayout";
import ShellColumn from "../components/ShellColumn";
import BorderedItemList from "../components/BorderedItemList";

import firebase from "../lib/db.js";
import SectionTitle from "../components/SectionTitle";
import ContactSection from "../components/ContactSection";

export default class Index extends React.Component {
  static async getInitialProps() {
    let project_data = await new Promise((resolve, reject) => {
      firebase
        .collection("projects")
        .get()
        .then(function(querySnapshot) {
          let project_data = [];
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            let document_data = doc.data();
            project_data.push(document_data);
          });
          resolve(project_data);
        })
        .catch(error => {
          reject([]);
        });
    });

    let backlog_data = await new Promise((resolve, reject) => {
      firebase
        .collection("backlog")
        .get()
        .then(function(querySnapshot) {
          let backlog_data = [];
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            let document_data = doc.data();
            backlog_data.push(document_data);
          });
          resolve(backlog_data);
        })
        .catch(error => {
          reject([]);
        });
    });

    let contact_data = await new Promise((resolve, reject) => {
      firebase
        .collection("about")
        .get()
        .then(function(querySnapshot) {
          let contact_data;
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            contact_data = doc.data();
          });
          resolve(contact_data);
        })
        .catch(error => {
          reject([]);
        });
    });
    return {
      projects: project_data,
      backlog: backlog_data,
      contact: contact_data
    };
  }

  render() {
    return (
      <HomepageLayout>
        <ShellColumn>
          <section id="active-projects">
            <SectionTitle title="Active Projects" />
            <BorderedItemList items={this.props.projects} />
          </section>
        </ShellColumn>

        <ShellColumn>
          <section id="contact">
            <SectionTitle title="Contact" />
            <ContactSection contactData={this.props.contact} />
          </section>
          <section id="about">
            <SectionTitle title="About" />
            <p>{this.props.contact.pageSummary}</p>
          </section>
        </ShellColumn>
        <ShellColumn>
          <section id="backlog">
            <SectionTitle title="Backlog" />
            <BorderedItemList items={this.props.backlog} />
          </section>
        </ShellColumn>
      </HomepageLayout>
    );
  }
}
