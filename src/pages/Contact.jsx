const Contact = () => {
    return ( 
        <section class="contact">
          <div class="content">
            <h2>Hubungi Kami</h2>
            <p>Hubungi Kami pada laman dibawah ini, saran dan masukan yang membangun sangat kami butuhkan.
            </p>
          </div>
          <div className="container">
            <div className="contactInfo">
              <div className="box">
                <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                <div className="text">
                  <h3>Alamat</h3>
                  <p>Jl.Raya Blambangan No.37 Muncar Banyuwangi</p>
                </div>
              </div>
              <div className="box">
                <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                <div className="text">
                  <h3>Telphone</h3>
                  <p>+6283-0797-8989</p>
                </div>
              </div>
              <div className="box">
                <div className="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                <div className="text">
                  <h3>Email</h3>
                  <p>Yogadwitara18@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contactForm">
              <form>
                <h2>Kirim Pesan</h2>
                <div className="inputBox">
                  <input type="text" name="" required='required'/>
                  <span>Nama</span>
                </div>
                <div className="inputBox">
                  <input type="text" name="" required='required'/>
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <textarea  required="required"></textarea>
                  <span>Ketik Pesan anda.....</span>
                </div>
                <div className="inputBox">
                  <input type="submit" name="" value="Kirim"/>
                </div>
              </form>
            </div>
          </div>
        </section>
     );
}
 
export default Contact;