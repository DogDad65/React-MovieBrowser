import Hero from "./Hero";

const About = () => {
  return (
    <>
        <Hero text= "About Us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Hello, welcome to my attempt at creating a working website. Join me on my stressful journey learning web development.
                </p>
            </div>
          </div>
        </div>
    </>
    
  );
};

export default About;