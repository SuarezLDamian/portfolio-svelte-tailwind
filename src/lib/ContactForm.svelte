<script lang="ts">

</script>

<div class="relative flex flex-col justify-center overflow-hidden">
  <div class="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl">
      <h1 class="text-4xl font-bold font-lato text-center text-sky-400 mb-8">Send me a message</h1>
      <form class="space-y-4"
        action="https://formbold.com/s/oyW8K"
        method="POST">
          <div>
              <label class="label">
                  <span class="text-base label-text">Name</span>
              </label>
              <input type="text" name="Name" placeholder="Your name" class="w-full input input-bordered input-primary" />
          </div>
          <div>
            <label class="label">
                <span class="text-base label-text">E-mail</span>
            </label>
              <input type="email" name="Email" placeholder="Your e-mail" class="w-full input input-bordered input-primary" />
          </div>
          <div>
              <label class="label">
                  <span class="text-base label-text">Message</span>
              </label>
              <textarea name="Message" placeholder="Your message" class="w-full textarea textarea-bordered textarea-primary" />
          </div>
          <div>
              <button type="submit" class="btn btn-block btn-primary">Send</button>
          </div>
      </form>
  </div>
</div>