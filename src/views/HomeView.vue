<template>
  <div class="text-justify  animate__animated animate__fadeIn animate__delay-1s" 
    style="margin: 0 auto; max-width:800px">
    <p class="p-4">Haute Tech is a futuristic business analysis and tech. company
      bringing revolutionary services such as web3 (Blockchain) and 
      A.I. (Machine Learning) to the fashion industry.
    </p>
    <p class="p-4">We specialise in solving real-world problems in an approachable
      way, meaning you don't need to be a techno-wizard to work with us -
      quite the opposite! We tame technology and make it accessible to all,
      no matter the size of your design house or previous IT experience.
    </p>
    <p class="p-4">So what's in it for you?
      We provide A.I. based market research so you can accelerate your growth
      by reaching the right audience, provide ready-to-use software services
      which can be tailored and branded to fit your company, and allow you
      to join us on the next generation of the Internet&hellip; known as <strong>web3</strong>.
    </p>

    <div class="my-4 p-6">
      <h2 class="text-3xl">Services we provide</h2>
      <p>Please join our <router-link to="/signup">mailing list</router-link>
      if you believe any of the following services would be useful to your business&hellip;</p>
    </div>

    <div class="my-6 p-6 flex flex-col bg-black text-white shadow-md">
      <h3 class="text-xl font-bold mt-3">Event Tickets <Web3Icon/></h3>
      <p>Provide secure tickets for your events.</p>
      <p>These tickets are non-transferable and impossible to fake.
        Unlike digital images and tickets, they are impossible to duplicate. Particularly
        useful for VIPs or organising exclusive private events.
      </p>
    </div>

    <div class="my-6 p-6 flex flex-col bg-white text-black shadow-md">
      <h3 class="text-xl font-bold mt-3">Mementos <Web3Icon/></h3>
      <p>Once an event is over, you can gift those who took the time to attend
        with a &rsquo;memento&lsquo;.
      </p>
      <p>Again, these are non-transferable and impossible to duplicate.
        Ideal if you want to reward those same people at some point in the future or invite 
        only those who attended an event to subsequent events.</p>
    </div>

    <div class="my-6 p-6 flex flex-col bg-black text-white shadow-md">
      <h3 class="text-xl font-bold mt-3">Loyalty system <Web3Icon/></h3>
      <p>Loyalty schemes are expensive and expose your brand to fraud (the damage to
        reputation could be catastrophic). But rewarding loyal customers is an essential
        part of maintaining that relationship and keeping them coming back.
      </p>
      <p>Loyalty points are awarded with your own &rsquo;cryptocurrency&lsquo;
        and are impossible to cheat.
      </p>
    </div>

    <div class="my-6 p-6 flex flex-col bg-white text-black shadow-md">
      <h3 class="text-xl font-bold mt-3">Proof of ownership <Web3Icon/></h3>
      <p>Combat fake garments which ruin your reputation and allow others to profiteer from your brand.
        With each item sold (or alternatively, each <em>high-value</em> good sold) the owner will receive
        a secure digital certificate of authenticity. When re-selling the item on Vestiaire etc., they can
        provide cryptographic proof of ownership without needing to send the item to an &rsquo;authority&lsquo;
        for checking <em>and</em> they can transfer the certificate to the new owner.
      </p>
    </div>

    <div class="my-6 p-6 flex flex-col bg-black text-white shadow-md">
      <h3 class="text-xl font-bold mt-3">A.I. for everyone <AiIcon/></h3>
      <p>Apply A.I. to your brand without needing to be a data science boffin.
        Our A.I. services make use of industry's best Deep Learning algorithms, wrapped
        in a simple to use and intuitive user interface. You can quickly identify
        new target audiences, which instagram users to target (based on their likes and preferences),
        and help scale your brand much faster than natural organic growth or aimless social media advertising.
      </p>
      <p>A.I. helps you become more strategic and reach the people who <em>want to buy</em> your products!</p>
    </div>

    <div class="my-6 p-6 flex flex-col bg-white text-black shadow-md">
      <h3 class="text-xl font-bold mt-3">Voting system <Web3Icon/></h3>
      <p>Gaining business insight from your customers is the new standard.
        It allows you to anticipate what your next move should be without needing a time machine.
        Much of Haute Tech's service suite is dedicated to helping upcoming talent and established
        fashion houses understand their customer-base and make informed, strategic decisions.
      </p>
      <p>One facet of this is a voting system to gather feedback from carefully
        selected customers. Allow them to feel they are a part of the design process and
        helping shape the brands they love - it will work wonders for loyalty and can easily
        be incorporated into your loyalty scheme (discussed above).
      </p>
    </div>

    <div class="my-6 p-6 flex flex-col bg-black text-white shadow-md">
      <h3 class="text-xl font-bold mt-3">Renting goods <Web3Icon/></h3>
      <p>Use our rental system is based on a new Blockchain standard <strong>ERC-4907</strong>.
        In laymen's terms, this means it's un-hackable and fully traceable. providing you with
        everything you need to run a rental service without all of the headaches associated from
        traditional software systems.
      </p>
    </div>

    <div class="my-6 p-6 flex flex-col bg-white text-black shadow-md">
      <h3 class="text-xl font-bold mt-3">Secure website hosting <Web3Icon/></h3>
      <p>This one is difficult to describe without getting technical, so we'll just
        say we can provide secure web hosting services which scale no matter how many
        people are trying to access your site because your site is running on thousands of web servers all over the world.
        These sites <em>cannot be modified</em> by hackers and are backed by the <a href="https://filecoin.io" target="_blank">Filecoin network</a> -
        a decentralised storage network which is immune to traditional attacks like distributed denial of service (DDoS).
      </p>
    </div>
  </div>
</template>

<script setup>
import Web3Icon from '@/components/Web3Icon.vue'
import AiIcon from '@/components/AiIcon.vue'
</script>