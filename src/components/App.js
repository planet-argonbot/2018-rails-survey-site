import React, { Component } from 'react';

import Share from './Share';
import Header from './Header';
import RailsUpdates from './RailsUpdates';
import NotUpdated from './NotUpdated';
import RailsVersions from './RailsVersions';
import Airbrake from './Airbrake';
import RailsServers from './RailsServers';
import Databases from './Databases';
import CodeQuality from './CodeQuality';
import GreenfieldRails from './GreenfieldRails';
import TestCoverage from './TestCoverage';
import ActiveJob from './ActiveJob';
import CIServers from './CIServers';
import Containers from './Containers';
import Footer from './Footer';

import loveGem from '../assets/images/loved-gems.png';
import hateGem from '../assets/images/frustrating-gems.png';
import love from '../assets/images/rails-love.png';
import hate from '../assets/images/ruby-hate.png';


class App extends Component {
  render() {
    return (
      <div>
        <div className="position--relative">
          <Header />
          <div className="position--relative">
            <div className="container border--left">
              <div className="row padding-top-lg padding-bottom-md position--relative z-index-1">
                <div className="col-md-10 col-centered">
                  <h1 className="font--headline margin-top-lg margin-bottom-xl">2018 Ruby on Rails Developer Community Survey</h1>
                  <p className="margin-bottom-sm padding-top-lg h2 text-center">The results are in!</p>
                  <p className="margin-bottom-xl padding-bottom-lg">Over 2,000 members of the Rails community kindly contributed their thoughts on tools, frameworks, and workflows in their day to day development lives. From these responses we hope to get an understanding of where the Rails community is as a whole in 2018. Some of these questions have been asked since our original survey a decade ago, and show how the community has evolved over the last ten years. Others are first-time questions included to capture the current state of Rails.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="share-container background--white font--black text-center">
          <Share/>
        </div>

        <div className="background--light-gray padding-top-xxl">
          <div className="h1 margin-top-xl margin-bottom-xl">Demographics</div>
          <div className="row justify-content-center margin-bottom-lg">
            <div className="col-8">
              <p>Who contributed to this survey of the Rails community? Here's a quick look at the demographics of the developers who completed this survey.</p>
            </div>
          </div>
          <div className="row margin-top-md margin-bottom-grand justify-content-center">
            <div className="col-sm-10 col-md-3 col-lg-2 margin-xs background--darkest-gray padding-md">
              <p className="font--sub-headline montserrat">72</p>
              <p className="montserrat-text">countries represented in the survey</p>
            </div>
            <div className="col-sm-10 col-md-3 col-lg-2 margin-xs background--darkest-gray padding-md">
              <p className="font--sub-headline montserrat">65<span className="h3">%</span></p>
              <p className="montserrat-text">of respondents reported they work in a product shop </p>
            </div>
            <div className="col-sm-10 col-md-3 col-lg-2 margin-xs background--darkest-gray padding-md">
              <p className="font--sub-headline montserrat">45<span className="h3">%</span></p>
              <p className="montserrat-text">of respondents have 7+ years of experience working with Rails (75% with 4+)</p>
            </div>
          </div>

          <div className="container margin-top-grand padding-bottom-xxl">
            <div className="h1 margin-bottom-lg">In the Community</div>
            <div className="row justify-content-center">
              <div className="col-8">
                <p>Between developers in agencies, product shops, and freelancer/contractors, we noticed a few interesting trends.</p>
              </div>
            </div>
            <div className="row margin-top-md justify-content-center">
              <div className="col-md-3 text-left">
                <p className="font-weight--bold font--yellow margin-bottom-xs">Agencies</p>
                <p className="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More authored gems</p>
                <p className="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More active in the community*</p>
                <p className="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More monoliths than microservices</p>
              </div>
              <div className="col-md-3 text-left">
                <p className="font-weight--bold font--blue margin-bottom-xs">Product shops</p>
                <p className="border--blue padding-xs margin-bottom-xs background--darkest-gray">Tend to be on larger teams</p>
                <p className="border--blue padding-xs margin-bottom-xs background--darkest-gray">Better test coverage</p>
              </div>
              <div className="col-md-3 text-left">
                <p className="font-weight--bold font--teal margin-bottom-xs">Freelancers</p>
                <p className="border--teal padding-xs margin-bottom-xs background--darkest-gray">More likely to be self-taught</p>
                <p className="border--teal padding-xs margin-bottom-xs background--darkest-gray">More working in Rails for more than 10+ years</p>
              </div>
              <div className="col-9 margin-top-sm">
                <p className="text-left small">* ie. attended more conferences, authored more gems and attended more users groups.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-lg">
          <div className="h1 margin-top-xxl margin-bottom-lg">Keeping Rails Up-to-Date</div>

          <div className="row margin-top-lg justify-content-center padding-md margin-bottom-xxl">
            <div className="col-sm-12 col-md-10 col-lg-8 margin-bottom-sm">
              <p className="h3 margin-bottom-sm">How many apps are kept updated to the most recent (Rails/Ruby) releases?</p>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-8 margin-bottom-sm">
              <RailsUpdates/>
            </div>
          </div>


          <div className="row margin-top-xl justify-content-center padding-md">
            <div className="col-sm-12 col-md-10 col-lg-8 margin-bottom-xl">
              <p className="h3 margin-bottom-sm">If not all apps are kept updated, why not?</p>
              <NotUpdated/>
            </div>
          </div>

          <div className="row justify-content-center margin-top-xl padding-md">
            <div className="col-sm-12 col-md-8 col-lg-8 margin-bottom-xl">
              <p className="h3 margin-bottom-sm">Which versions of Rails are you using? </p>
              <RailsVersions/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-6 margin-bottom-grand">
              <p className="margin-bottom-md">Around half of all respondents answered that most or all of the applications they work on are updated to the most recent version of Rails. For those not running all applications on the newest version, time was by far the most common issue holding developers back from updating.</p>

              <p>We think it’s particularly promising that such a high percentage of responses indicated they are using Rails 4.2 or higher in their applications. This is the oldest version of Rails that is receiving ongoing security patches from the community, so any versions below may be more prone to security threats – as a developer working on these older versions, you're on your own.</p>
            </div>
          </div>

        </div>

        <div className="padding-lg background--light-gray row justify-content-center">
          <div className="col-md-6 margin-bottom-md">
            <span className="quote-mark font--yellow">&ldquo;</span>
            <div className="margin-bottom-lg">
              <p className="quote font--sub-headline montserrat">75<span className="h3">%</span></p>
              <p className="h2">agree that the Rails core team is shepherding the project in the <span className="font--yellow">right direction</span>.</p>
            </div>
            <a href='https://twitter.com/intent/tweet?text=3/4+of+all%20%23Rails+survey+respondents+agree+the+@rails+core+team+is+shepherding+the+project+in+the+right+direction.+See+more+stats+at+rails-hosting.com/2018' target="_blank" className="h4"><i className="fa fa-twitter-square font--yellow"></i></a>
          </div>
        </div>

        <div className="padding-top-xxl padding-lg">
          <div className="h1 margin-top-xxl">Tools</div>
          <div className="row justify-content-center">
            <div className="pie col-sm-12 col-md-10 col-lg-8">
              <div className="h3 margin-bottom-sm margin-top-lg">How many of your Rails apps have decent test coverage (80%)?</div>
              <TestCoverage/>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 margin-bottom-sm">
              <a href="https://blog.planetargon.com/entries/the-state-of-test-coverage-in-rails" target="_blank" title="2018 Rails Survey Blog Post on Test Coverage" className="btn btn-yellow montserrat font--black">READ MORE ABOUT TEST COVERAGE</a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="pie ccol-sm-12 col-md-10 col-lg-8 padding-bottom-md margin-top-grand">
              <div className="h3 margin-bottom-md">Which Active Job adapters do you use to use to process background jobs?</div>
              <ActiveJob/>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-8 margin-top-grand">
              <div className="h3 margin-bottom-sm">Which Continuous Integration (CI) servers do you use?</div>
              <CIServers/>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-8 margin-top-grand">
              <div className="h3 margin-bottom-sm">What code quality tools do you use?</div>
              <CodeQuality/>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6">
              <a href="https://blog.planetargon.com/entries/code-quality-matters-in-rails" target="_blank" title="2018 Rails Survey Blog Post on Code Quality and Continuous Integration" className="btn btn-yellow montserrat font--black">READ MORE ABOUT CI AND CODE QUALITY </a>
            </div>
          </div>
        </div>

        <div className="margin-top-grand">
          <div className="h1">Containers</div>
          <div className="row justify-content-center margin-top-xl padding-bottom-xl">
            <div className="col-8">
              <Containers />
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6">
              <a href="https://blog.planetargon.com/entries/keeping-ruby-on-rails-on-track-with-containers" target="_blank" title="2018 Rails Survey Blog Post on Container Usage" className="btn btn-yellow montserrat font--black">READ MORE ABOUT CONTAINER USAGE</a>
            </div>
          </div>
        </div>

        <div className="margin-top-grand">
          <p className="h1 margin-md">Ruby Gems</p>
          <div className="row justify-content-center padding-md">
            <div className="col-sm-12 col-md-10 col-lg-6">
              <p className="h3 margin-top-md margin-bottom-md">Which Rubygems do you love? And which frustrate you the most?</p>
              <p>Here’s a chart of all the gems that were named as the most loved and most frustrating, respectively – the size of the text correlates to how often it showed up in our results.</p>
            </div>
          </div>
          <div className="row justify-content-center padding-md">
            <div className="col-sm-6 col-md-4 col-lg-2 margin-md">
              <img src={love} className="icon" alt="word cloud of most loved gems" />
              <p className="h5 font--yellow">Top 5 Loved Gems</p>
              <ol className="margin-top-sm text-left padding-left-sm">
                <li>1. devise</li>
                <li>2. sidekiq</li>
                <li>3. pry</li>
                <li>4. rspec</li>
                <li>5. rubocop</li>
              </ol>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 margin-md">
              <img src={hate} className="icon" alt="word cloud of most loved gems" />
              <p className="h5 font--coral">Top 5 Frustrating Gems</p>
              <ol className="margin-top-sm text-left padding-left-sm">
                <li>1. nokogiri</li>
                <li>2. devise</li>
                <li>3. activeadmin</li>
                <li>4. activerecord</li>
                <li>5. rspec</li>
              </ol>
            </div>
            <div class="col-8 margin-top-xxl">
              <p className="h4 margin-bottom-sm">Most <span className="h2 font--yellow">Loved</span> Gems</p>
              <img src={loveGem} className="wordcloud" alt="word cloud of most loved gems" />
            </div>
            <div class="col-8 margin-top-xxl">
              <p className="h4 margin-bottom-sm">Most <span className="h2 font--coral">Frustrating</span> Gems</p>
              <img src={hateGem}  className="wordcloud" alt="word cloud of most frustrating gems" />
            </div>
            <div class="col-sm-12 col-md-10 col-lg-6">
              <p className="margin-top-md">In the realm of polarizing gems, Devise takes the cake. The flexible authentication gem was named most frequently on the most loved and second most frequently on the most frustrating gem free form response field.</p>
            </div>
          </div>
        </div>

        <div className="row margin-top-grand padding-md justify-content-center">
          <div className="h1 col-10">Asset Management</div>
          <div className="col-sm-12 col-md-10 col-lg-8 margin-top-xl">
            <p className="h3 margin-bottom-sm">For greenfield Rails projects, what are you using to manage Javascript libraries?</p>
            <GreenfieldRails/>
          </div>
          <div className="col-sm-12 col-md-10 col-lg-6 margin-top-md">
            <p>With the release of Rails 5.1, the Rails community has upped its game as far as its relationship with the JavaScript community. Alongside the gem webpacker, developers now have the ability to write es6 and integrate with yarn and npm tools to manage javascript dependencies via webpack. Although Rails 5.1 was released only a year ago - we’re seeing 44% of developers are already using webpack to manage their JavaScript dependencies for greenfield applications.</p>
          </div>
        </div>

        <div className="row justify-content-center padding-top-xl margin-top-grand padding-md">
          <div className="h1 col-10">Application Exceptions</div>
          <div className="col-sm-12 col-md-10 col-lg-8 margin-top-xl">
            <div className="h3 margin-bottom-sm">Which Application Exception tracking tools do you use in production?</div>
            <Airbrake />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-6 margin-top-md">
            <p>Airbrake (formerly Hoptoad) accounted for 53% of responses back in 2012 and fell to 28% in 2014, 21% in 2016, and has continued to fall to 11% in 2018. One possible reason? The application exception tracking space has become more saturated over the years.</p>
          </div>
        </div>

        <div className="margin-top-grand padding-top-xl">
          <div className="h1 margin-bottom-lg">Ruby Web Servers</div>
          <div className="row justify-content-center padding-md">
            <div className="col-sm-12 col-md-10 col-lg-8">
              <div className="h3 margin-bottom-sm">Which Rails Servers are you using in production?</div>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-8">
              <RailsServers/>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-6 margin-top-md">
              <p>Puma has continued its upward climb as the Rails server of choice. Usage grew from 17% of responses in 2014 to 35% in 2016 to 48% this year. While Unicorn was on par with Puma in 2016 (at 34% to Puma’s 35%), it has fallen below Passenger this year. Farewell, Unicorn in the coming years? We’ll have to wait and see.</p>
            </div>
          </div>
        </div>

        <div className="margin-top-grand padding-top-xl">
          <div className="h1 margin-bottom-lg">Databases</div>
          <div className="row justify-content-center padding-md">
            <div className="col-sm-12 col-lg-8 ">
              <div className="h5 margin-bottom-md">Which databases do you prefer to use in production?</div>
              <Databases/>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-6 margin-top-sm margin-bottom-xl">
              <p>The trends we’ve seen in previous years continue with PostgreSQL leading the database pack in terms of developer preference (and overall usage, with 60% of responses indicating use of PostgreSQL in production).</p>
            </div>
          </div>
        </div>



        <div className="padding-top-xxl padding-bottom-xl background--darkest-gray">
          <div className="row justify-content-center padding-md">
            <div className="col-xs-10 col-md-8">
              <div className="h1 margin-bottom-md">Conclusion</div>
              <p className="margin-bottom-md">It’s no secret that Rails isn’t the new kid on the block any more. But we’re seeing that the majority of developers who are using the framework recommend building applications with it and feel that it’s headed in the right direction. The Rails core team is adapting the framework to work with with new tools such as webpack and containerized environments like Docker. Rails is also integrating with the growing popularity of modern JavaScript frameworks such as React, Vue, and Angular.</p>

              <p>Our team here at Planet Argon has been passionate about Rails for years and continues to be excited about the future of the framework and community. We appreciate every single Rails developer that took the time to complete our survey – we hope to see you next time for a recap of the next two years of working with Rails.</p>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 margin-top-lg margin-bottom-md">
              <a href="https://docs.google.com/spreadsheets/d/1IFRaS-t91ffto__Gxm0nwDNYtjXcg7EFCR7QXvae6HA/edit#gid=40255677" target="_blank" title="2018 Rails Survey Full Results" className="btn btn--ghost montserrat font--black">VIEW ALL SURVEY RESPONSES</a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}

export default App;
