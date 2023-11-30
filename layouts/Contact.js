import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

import {useState, useEffect} from 'react'
import axios from "axios";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  // const { contact_form_action } = config.params;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  async function contact_form_action(e) {
    e.preventDefault();
    let data = {
      name,
      email,
      message
    }
   
    axios.get("https://strapi-155887-0.cloudclusters.net/api/contacts").then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

  }


  return (
    <section className="section bg-primary ">
      <div className="container pt-12 ">
        {markdownify(title, "h1", "text-center font-normal text-white")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              onSubmit={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  id="message"
                  placeholder="Your message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary bg-[#ef7756]">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4", "text-white")}
            {markdownify(info.description, "p", "mt-4 text-white")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", " text-white")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
