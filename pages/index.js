import HomepageLayout from "../components/HomepageLayout";
import ShellColumn from "../components/ShellColumn";
import BorderedItemList from "../components/BorderedItemList";

const Index = () => (
  <HomepageLayout>
    <ShellColumn>
      <section id="active-projects">
        <div className="section-title">
          <h1>Active Projects</h1>
        </div>
        <BorderedItemList
          items={[
            { title: "Test title", body: "test body" },
            {
              title: "Test title2",
              body:
                "Long time due for subcity.org redesign after several discussions during meetings regarding current short comings of site. Action points:"
            },
            { title: "Test title", body: "test body" },
            { title: "Test title2", body: "test body2" },
            { title: "Test title", body: "test body" },
            { title: "Test title2", body: "test body2" },
            { title: "Test title", body: "test body" },
            { title: "Test title2", body: "test body2" },
            { title: "Test title", body: "test body" },
            { title: "Test title2", body: "test body2" }
          ]}
        />
      </section>
    </ShellColumn>

    <ShellColumn>
      <section id="active-projects">
        <div className="section-title">
          <h1>About</h1>
        </div>
        <p>
          I am a software engineer with experience in full stack web
          development, primarily using Python, Javascript and associated web
          frameworks. With 3+ years experience in the field, I have been
          involved in bringing many web projects from first-draft wireframe
          designs to live production environments, serving thousands of users
          per day. Both on physical, networked hardware on virtualised
          environments using XEN/Chef/Docker and cloud-based deployments on
          GoogleCPlatform and Digital Ocean. Projects I have been a part of
          range from developing community centred projects in team environments
          (subcity.org / openstates.org), building applications in corporate
          contexts (sas.com/en_gb/company-information.html), to building
          assistive developer tools for myself and others to use
          (github.com/brymut/off-stack). In my spare time away from my keyboard,
          I enjoy run a weekly community radio show on subcity.org, skateboard
          and during term time, volunteer my time with Codeclub codeclub.org.uk,
          an after-school club where children build up programming skills.
        </p>
      </section>
      <section id="active-projects">
        <div className="section-title">
          <h1>Contact</h1>
        </div>
        <p>
          For enquires and full CV please feel free to reach me at
          work[at]bryanmutai.co Always open to hearing out new ideas and
          community based project proposals. 😊 github.com/brymut
          https://www.linkedin.com/in/bryanmutai/
        </p>
      </section>
    </ShellColumn>
    <ShellColumn>
      <section id="active-projects">
        <div className="section-title">
          <h1>About</h1>
        </div>
        <BorderedItemList
          items={[
            { title: "Test title", body: "test body" },
            {
              title: "Test title2",
              body:
                "Long time due for subcity.org redesign after several discussions during meetings regarding current short comings of site. Action points:"
            },
            { title: "Test title", body: "test body" },
            { title: "Test title2", body: "test body2" },
            { title: "Test title", body: "test body" },
            { title: "Test title2", body: "test body2" },
            { title: "Test title", body: "test body" },
            { title: "Test title2", body: "test body2" },
            { title: "Test title", body: "test body" },
            { title: "Test title2", body: "test body2" }
          ]}
        />
      </section>
    </ShellColumn>
    <style jsx>{`
      .section-title {
        width: 170px;
        margin-left: 3;
        background-color: black;
        color: white;
      }
    `}</style>
  </HomepageLayout>
);

export default Index;
