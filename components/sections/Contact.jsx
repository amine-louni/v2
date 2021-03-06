import Image from "next/image";
import zigZag from "../../public/zigzag-yellow.svg";
import squares from "../../public/square-yellow.svg";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <figure className="contact__form contact__form-1">
        <Image src={zigZag} alt="zig zag" />
      </figure>
      <figure className="contact__form contact__form-2">
        <Image src={squares} alt="zig zag" className="contact__form-2" />
      </figure>
      <div className="container">
        <div className="title-center">
          <h4 className="title-center__intro">
            <span>04. </span>What&apos;s Next?
          </h4>
          <h2 className="title-center__main">Get In Touch</h2>

          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <p>
                My inbox is always open. Whether you have a question or just
                want to say hi, I’ll try my best to get back to you!
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>

        <div className="cta">
          <a className="btn" href="mailto: amine.louni.dev@gmail.com">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
