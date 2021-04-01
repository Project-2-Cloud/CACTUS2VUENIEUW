<template>
  <div>
    <section class="page-section" id="contact">
      <div class="container">
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
          Contact Us
        </h2>
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <form id="contactForm" @submit.prevent="sendEmail" name="sentMessage" novalidate="novalidate">
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Name</label>
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Email Address</label>
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                          v-model="email"
                      name="email"
                    placeholder="Email Address"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Phone Number</label>
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required="required"
                    data-validation-required-message="Please enter your phone number."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="5"
                    placeholder="Message"
                         v-model="message"
                      name="message"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div class="form-group">
                <button
                  class="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">
              Geldenaaksebaan 335,
              <br />
              3001 Leuven
            </p>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"
              ><i class="fab fa-fw fa-facebook-f"></i
            ></a>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"
              ><i class="fab fa-fw fa-twitter"></i
            ></a>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"
              ><i class="fab fa-fw fa-linkedin-in"></i
            ></a>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"
              ><i class="fab fa-fw fa-dribbble"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
    <div class="scroll-to-top d-lg-none position-fixed">
      <a
        class="js-scroll-trigger d-block text-center text-white rounded"
        href="#page-top"
        ><i class="fa fa-chevron-up"></i
      ></a>
    </div>
  </div>
</template>

<script>
  methods: {
    sendEmail(e) {
      console.log(this.name)
      console.log(this.name)
      console.log(this.message)
      try {
        emailjs.sendForm('service_d3t3vsb', 'template_l3rdsvm', e.target,
            'user_J45fxBwryC5sxXo7gzuKp', {
              name: this.name,
              email: this.email,
              message: this.message
            })

      } catch (error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>
