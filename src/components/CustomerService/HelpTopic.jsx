import { useState } from "react";
import "../../assets/styles/HelpTopic.css";

const box0 = (
  <div className="grid-box2">
    <div className="grid-box2-child">
      <label className="title">
        Find a missing package that shows as "Delivered"
      </label>
      <label className="describe-text">
        Most packages arrive on time, but, sometimes, the tracking may show as
        "delivered" and you don't have your package.
      </label>
    </div>

    <div className="grid-box2-child">
      <label className="title">Late Deliveries</label>
      <label className="describe-text">
        Most packages arrive on time. Orders sometimes show up after the
        estimated delivery date.
      </label>
    </div>

    <div className="grid-box2-child">
      <label className="title">Track your package</label>
      <label className="describe-text">
        You can find tracking information in your order details. If an order
        includes multiple items, each may have separate delivery dates and
        tracking information.
      </label>
    </div>

    <div className="grid-box2-child">
      <label className="title">Check status a refund</label>
      <label className="describe-text">
        You can check the status of your refund in Your Orders.
      </label>
    </div>

    <div className="grid-box2-child">
      <label className="title">Find a missing item from your package</label>
      <label className="describe-text">
        If an item is missing from your package, it may have been shipped
        separately.
      </label>
    </div>

    <div className="grid-box2-child">
      <label className="title">Replace an item</label>
      <label className="describe-text">
        If you received a damaged, defective, or incorrect item sold by Amazon,
        you can request a replacement for a small number of eligible items
        through Your Orders
      </label>
    </div>

    <div className="grid-box2-child">
      <label className="title">Cancel item or Orders</label>
      <label className="describe-text">
        You can cancel items or orders that haven't entered the shipping process
        yet.
      </label>
    </div>
  </div>
);

const box1 = (
  <div>
    <div className="grid-box2">
      <div className="grid-box2-child">
        <label className="title">Track your package</label>
        <label className="describe-text">
          You can find tracking information in your order details. If an order
          includes multiple items, each may have separate delivery dates and
          tracking information.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">
          Find a missing package that shows as "Delivered"
        </label>
        <label className="describe-text">
          Most packages arrive on time, but, sometimes, the tracking may show as
          "delivered" and you don't have your package.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Undeliverable Packages</label>
        <label className="describe-text">
          If an item is missing from your package, it may have been shipped
          separately.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Find a missing item from your package</label>
        <label className="describe-text">
          If an item is missing from your package, it may have been shipped
          separately.
        </label>
      </div>
    </div>
    <div className="grid-button">
      <button className="more-button">More in Where's my Stuff</button>
    </div>
  </div>
);

const box2 = (
  <div>
    <div className="grid-box2">
      <div className="grid-box2-child">
        <label className="title">Carrier Contact Information</label>
        <label className="describe-text">
          We work with the following carriers to deliver items. If you have an
          issue with your delivery, you can contact the carriers directly.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">International Free Shipping</label>
        <label className="describe-text">
          If your order meets certain requirements and you're shipping to an
          eligible international destination, you can select the FREE
          AmazonGlobal Standard Shipping option during checkout.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">About Import Fees Deposit</label>
        <label className="describe-text">
          AmazonGlobal offer customers customs duties, taxes and fees ("Import
          Fees") estimation during checkout and customs clearance on your behalf
          for certain eligible countries and regions.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">
          About Customs Regulations for Identity Documents
        </label>
        <label className="describe-text">
          When you place an order for a product from Amazon.com, Identity
          Documents (ID information) may be required for customs clearance.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">About Customs, Duties and Taxes</label>
        <label className="describe-text">
          When ordering from Amazon.com, you're responsible for assuring the
          product can be lawfully imported to the destination.
        </label>
      </div>
    </div>
    <div className="grid-button">
      <button className="more-button">
        More information on Shipping and Delivery
      </button>
    </div>
  </div>
);

const box3 = (
  <div>
    <div className="grid-box2">
      <div className="grid-box2-child">
        <label className="title">About Our Returns Policies</label>
        <label className="describe-text">
          Amazon.com and most sellers on Amazon.com offer returns for items
          within 30 days of receipt of shipment.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Return Items You Ordered</label>
        <label className="describe-text">
          You can return many eligible items sold on Amazon. When you return an
          item, you may see different return options depending on the seller,
          item, or reason for return.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">International Returns</label>
        <label className="describe-text">
          How to return items from outside the US.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Return a Gift</label>
        <label className="describe-text">
          The Returns Center allows gift recipients to return items marked as a
          gift at the time of purchase.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Track Your Return</label>
        <label className="describe-text">
          You can stay on top of your returns by tracking them in Your Orders.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Refunds</label>
        <label className="describe-text">
          When you return an item, your refund amount and refund method may
          vary. Check the payment method that was refunded and the status of
          your refund in Your Orders.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Check the Status of Your Refund</label>
        <label className="describe-text">
          You can check the status of your refund in Your Orders.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Replace an item</label>
        <label className="describe-text">
          If you received a damaged, defective, or incorrect item sold by
          Amazon, you can request a replacement for a small number of eligible
          items through{" "}
        </label>
      </div>
    </div>
    <div className="grid-button">
      <button className="more-button">More in Returns and Refunds</button>
    </div>
  </div>
);

const box4 = (
  <div>
    <div className="grid-box2">
      <div className="grid-box2-child">
        <label className="title">Cancel Items or Orders</label>
        <label className="describe-text">
          You can cancel items or orders that haven't entered the shipping
          process yet.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Change Your Order Information</label>
        <label className="describe-text">
          You can update the shipping address, payment method, and more, on
          orders that haven't entered the shipping process by visiting Your
          Orders in Your Account.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Change Your Language Preference</label>
        <label className="describe-text">
          You can choose your preferred language on some Amazon sites.{" "}
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Change Your Currency Preference</label>
        <label className="describe-text">
          Currency of Preference on International Shopping allows you to shop in
          over 80 currencies and pay for qualifying purchases in your local
          currency with an eligible American Express, MasterCard or Visa credit
          or debit card.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Unknown Charges</label>
        <label className="describe-text">
          There are several reasons why you might not recognize a charge.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">View Your Gift Card Balance</label>
        <label className="describe-text">
          You can view your Amazon.com Gift Card balance in Your Account.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">
          Request the Closure of Your Account and the Deletion of Your Personal
          Information
        </label>
        <label className="describe-text">
          You can submit a request for us to permanently close your Amazon
          account and delete your personal information.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Use Login with Amazon</label>
        <label className="describe-text">
          Login with Amazon lets you use your Amazon user name and password to
          sign in to and share information with participating third-party
          websites or apps.
        </label>
      </div>
    </div>
    <div className="grid-button">
      <button className="more-button">More in Managing Your Account</button>
    </div>
  </div>
);

const box5 = (
  <div>
    <div className="grid-box2">
      <div className="grid-box2-child">
        <label className="title">Amazon.com Privacy Notice</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Conditions of Use</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Unknown Charges</label>
        <label className="describe-text">
          There are several reasons why you might not recognize a charge.{" "}
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">
          Identifying Whether an Email, Phone Call, Text Message, or Webpage is
          from Amazon
        </label>
        <label className="describe-text">
          Here are some tips to determine if an email, phone call, text message,
          or webpage is not from Amazon.com.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Report Something Suspicious</label>
        <label className="describe-text">
          We take fraud, scam,phishing and spoofing attempts seriously. If you
          receive correspondence you think may not be from Amazon, please report
          it immediately.
        </label>
      </div>
    </div>
    <div className="grid-button">
      <button className="more-button">More in Security & Privacy</button>
    </div>
  </div>
);

const box6 = (
  <div>
    <div className="grid-box2">
      <div className="grid-box2-child">
        <label className="title">International Credit Cards</label>
        <label className="describe-text">
          Using an eligible international credit card may offer additional
          benefits.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Amazon Currency Converter</label>
        <label className="describe-text">
          Amazon Currency Converter allows you to pay for qualifying purchases
          in your local currency with an eligible American Express, MasterCard
          or Visa payment card.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Payment Issues and Restrictions</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Strike-through Pricing & Savings</label>
        <label className="describe-text">
          Items on Amazon may display a List Price, Was Price, or other
          strike-through pricing or saving information on the product detail
          page.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Using Amazon PayCode</label>
        <label className="describe-text">
          Amazon PayCode is available as a local currency, cash payment method
          in the United States and other select destinations.{" "}
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Unknown Charges</label>
        <label className="describe-text">
          There are several reasons why you might not recognize a charge.
        </label>
      </div>
    </div>
    <div className="grid-button">
      <button className="more-button">
        More in Payments, Pricing and Promotions
      </button>
    </div>
  </div>
);

const box7 = (
  <div>
    <div className="grid-box2">
      <div className="grid-box2-child">
        <label className="title">Get Kindle Book Order Refund</label>
        <label className="describe-text">
          Cancel an accidental book order within seven days. Approved refunds
          are credited to the original payment source within three to five days.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Cancel Kindle Unlimited Subscription</label>
        <label className="describe-text">
          Follow these steps to cancel your Kindle Unlimited membership.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">
          Cancel Your Prime Video Channel Subscription
        </label>
        <label className="describe-text">
          Cancel your Prime Video Channel subscriptions online.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Cancel Prime Video Accidental Purchase</label>
        <label className="describe-text">
          You are able to return a Prime Video order within 48 hours if you
          haven't attempted to watch or download it.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Cancel Kindle Unlimited Subscription</label>
        <label className="describe-text">
          Follow these steps to cancel your Kindle Unlimited membership.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Issues While Playing Prime Video Titles</label>
        <label className="describe-text">
          What to do when Prime Video titles won't play or if you see error
          codes such as 1007, 1022, 7003, 7005, 7031, 7135, 7202, 7203, 7204,
          7206, 7207, 7230, 7250, 7251, 7301, 7303, 7305, 7306, 8020, 9003,
          9074.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Install Prime Video on Your Devices</label>
        <label className="describe-text">
          Using the Prime Video app you will be able to watch Prime Video.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Parental Controls on Prime Video</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Set Up a Prime Video PIN</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Can't Screen Mirror on Fire TV Devices</label>
        <label className="describe-text">
          To resolve most issues with screen mirroring, make sure that your
          device and Fire TV are compatible.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Manage Your Content & Devices</label>
      </div>
    </div>
    <div className="grid-button">
      <button className="more-button">
        Ask the Digital & Device Community
      </button>
    </div>
  </div>
);

const box8 = (
  <div>
    <div className="grid-box2">
      <div className="grid-box2-child">
        <label className="title">Gifts, Gift Cards, and Registries</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Redeem a Gift Card</label>
        <label className="describe-text">
          When you redeem an Amazon.com Gift Card or gift voucher to your
          account, the funds are stored in Your Account and will automatically
          apply to your next eligible order.
        </label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Site Features</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Ordering</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">A-to-z Guarantee</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Author, Publisher & Vendor Guides</label>
      </div>

      <div className="grid-box2-child">
        <label className="title">Amazon Games</label>
      </div>
    </div>
    <div className="grid-button">
      <button className="more-button">Help for Amazon Sellers</button>
      <button className="more-button">Associates Program Help</button>
      <button className="more-button">Amazon Web Services</button>
    </div>
  </div>
);

function HelpTopic() {
  const [box, setBox] = useState(box0);

  const changeBox0 = () => {
    setBox(box0);
    changeColor1();
  };

  const changeBox1 = () => {
    setBox(box1);
    changeColor2();
  };

  const changeBox2 = () => {
    setBox(box2);
    changeColor3();
  };

  const changeBox3 = () => {
    setBox(box3);
    changeColor4();
  };
  const changeBox4 = () => {
    setBox(box4);
    changeColor5();
  };

  const changeBox5 = () => {
    setBox(box5);
    changeColor6();
  };

  const changeBox6 = () => {
    setBox(box6);
    changeColor7();
  };

  const changeBox7 = () => {
    setBox(box7);
    changeColor8();
  };

  const changeBox8 = () => {
    setBox(box8);
    changeColor9();
  };

  return (
    <div className>
      <div className="div">
        <label className="search">Search out help library</label>
        <div className="flex-box1">
          <img
            className="help-search-image"
            src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/item_search.png"
          ></img>
          <input
            className="help-search"
            placeholder='Type something like, "question abouta charge'
          ></input>
        </div>
        <label className="search1">All help topics</label>

        <div className="flex-box2">
          <div className="buttons">
            <button id="button1" onClick={changeBox0} className="button">
              Recommended Topics
            </button>
            <button id="button2" onClick={changeBox1} className="button">
              Where's my stuff
            </button>
            <button id="button3" onClick={changeBox2} className="button">
              Shipping and Delivery
            </button>
            <button id="button4" onClick={changeBox3} className="button">
              Returns and Refunds
            </button>
            <button id="button5" onClick={changeBox4} className="button">
              Managing Your Account
            </button>
            <button id="button6" onClick={changeBox5} className="button">
              Security & Privacy
            </button>
            <button id="button7" onClick={changeBox6} className="button">
              Payment, Pricing and Promotions
            </button>
            <button id="button8" onClick={changeBox7} className="button">
              Devices & Digital Solutions
            </button>
            <button id="button9" onClick={changeBox8} className="button">
              Other topics & Help sites
            </button>
          </div>
          {box}
        </div>
      </div>
    </div>
  );
}

function changeColor1() {
  document.getElementById("button1").style.backgroundColor = "#005a6a";
  document.getElementById("button2").style.backgroundColor = "#172424";
  document.getElementById("button3").style.backgroundColor = "#172424";
  document.getElementById("button4").style.backgroundColor = "#172424";
  document.getElementById("button5").style.backgroundColor = "#172424";
  document.getElementById("button6").style.backgroundColor = "#172424";
  document.getElementById("button7").style.backgroundColor = "#172424";
  document.getElementById("button8").style.backgroundColor = "#172424";
  document.getElementById("button9").style.backgroundColor = "#172424";
}

function changeColor2() {
  document.getElementById("button1").style.backgroundColor = "#172424";
  document.getElementById("button2").style.backgroundColor = "#005a6a";
  document.getElementById("button3").style.backgroundColor = "#172424";
  document.getElementById("button4").style.backgroundColor = "#172424";
  document.getElementById("button5").style.backgroundColor = "#172424";
  document.getElementById("button6").style.backgroundColor = "#172424";
  document.getElementById("button7").style.backgroundColor = "#172424";
  document.getElementById("button8").style.backgroundColor = "#172424";
  document.getElementById("button9").style.backgroundColor = "#172424";
}

function changeColor3() {
  document.getElementById("button1").style.backgroundColor = "#172424";
  document.getElementById("button2").style.backgroundColor = "#172424";
  document.getElementById("button3").style.backgroundColor = "#005a6a";
  document.getElementById("button4").style.backgroundColor = "#172424";
  document.getElementById("button5").style.backgroundColor = "#172424";
  document.getElementById("button6").style.backgroundColor = "#172424";
  document.getElementById("button7").style.backgroundColor = "#172424";
  document.getElementById("button8").style.backgroundColor = "#172424";
  document.getElementById("button9").style.backgroundColor = "#172424";
}

function changeColor4() {
  document.getElementById("button1").style.backgroundColor = "#172424";
  document.getElementById("button2").style.backgroundColor = "#172424";
  document.getElementById("button3").style.backgroundColor = "#172424";
  document.getElementById("button4").style.backgroundColor = "#005a6a";
  document.getElementById("button5").style.backgroundColor = "#172424";
  document.getElementById("button6").style.backgroundColor = "#172424";
  document.getElementById("button7").style.backgroundColor = "#172424";
  document.getElementById("button8").style.backgroundColor = "#172424";
  document.getElementById("button9").style.backgroundColor = "#172424";
}

function changeColor5() {
  document.getElementById("button1").style.backgroundColor = "#172424";
  document.getElementById("button2").style.backgroundColor = "#172424";
  document.getElementById("button3").style.backgroundColor = "#172424";
  document.getElementById("button4").style.backgroundColor = "#172424";
  document.getElementById("button5").style.backgroundColor = "#005a6a";
  document.getElementById("button6").style.backgroundColor = "#172424";
  document.getElementById("button7").style.backgroundColor = "#172424";
  document.getElementById("button8").style.backgroundColor = "#172424";
  document.getElementById("button9").style.backgroundColor = "#172424";
}

function changeColor6() {
  document.getElementById("button1").style.backgroundColor = "#172424";
  document.getElementById("button2").style.backgroundColor = "#172424";
  document.getElementById("button3").style.backgroundColor = "#172424";
  document.getElementById("button4").style.backgroundColor = "#172424";
  document.getElementById("button5").style.backgroundColor = "#172424";
  document.getElementById("button6").style.backgroundColor = "#005a6a";
  document.getElementById("button7").style.backgroundColor = "#172424";
  document.getElementById("button8").style.backgroundColor = "#172424";
  document.getElementById("button9").style.backgroundColor = "#172424";
}

function changeColor7() {
  document.getElementById("button1").style.backgroundColor = "#172424";
  document.getElementById("button2").style.backgroundColor = "#172424";
  document.getElementById("button3").style.backgroundColor = "#172424";
  document.getElementById("button4").style.backgroundColor = "#172424";
  document.getElementById("button5").style.backgroundColor = "#172424";
  document.getElementById("button6").style.backgroundColor = "#172424";
  document.getElementById("button7").style.backgroundColor = "#005a6a";
  document.getElementById("button8").style.backgroundColor = "#172424";
  document.getElementById("button9").style.backgroundColor = "#172424";
}

function changeColor8() {
  document.getElementById("button1").style.backgroundColor = "#172424";
  document.getElementById("button2").style.backgroundColor = "#172424";
  document.getElementById("button3").style.backgroundColor = "#172424";
  document.getElementById("button4").style.backgroundColor = "#172424";
  document.getElementById("button5").style.backgroundColor = "#172424";
  document.getElementById("button6").style.backgroundColor = "#172424";
  document.getElementById("button7").style.backgroundColor = "#172424";
  document.getElementById("button8").style.backgroundColor = "#005a6a";
  document.getElementById("button9").style.backgroundColor = "#172424";
}

function changeColor9() {
  document.getElementById("button1").style.backgroundColor = "#172424";
  document.getElementById("button2").style.backgroundColor = "#172424";
  document.getElementById("button3").style.backgroundColor = "#172424";
  document.getElementById("button4").style.backgroundColor = "#172424";
  document.getElementById("button5").style.backgroundColor = "#172424";
  document.getElementById("button6").style.backgroundColor = "#172424";
  document.getElementById("button7").style.backgroundColor = "#172424";
  document.getElementById("button8").style.backgroundColor = "#172424";
  document.getElementById("button9").style.backgroundColor = "#005a6a";
}

export default HelpTopic;
