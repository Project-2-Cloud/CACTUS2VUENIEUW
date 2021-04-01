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
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
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
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <h2
                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                    id="portfolioModal1Label"
                  >
                    Bobble Water Bottle (Yellow)
                  </h2>
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <img
                    class="img-fluid rounded mb-5"
                    src="assets/img/waterbottle.jpg"
                    alt=""
                  />
                  <p class="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button class="btn btn-primary" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Footer",
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    methods: {},
  },
};
</script>
