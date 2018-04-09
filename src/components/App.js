import React, { Component } from 'react';
import quote from '../assets/images/orange-quote-50.png';
import Share from './Share';
import Header from './Header';
import RailsUpdates from './RailsUpdates';
import RailsVersions from './RailsVersions';
import ApplicationExceptions from './ApplicationExceptions';
import Airbrake from './Airbrake';
import NewRelic from './NewRelic';
import RailsServers from './RailsServers';
import Databases from './Databases';
import CodeQuality from './CodeQuality';
import ActiveJob from './ActiveJob';
import Containers from './Containers';
import OperatingSystems from './OperatingSystems';

class App extends Component {
  render() {
    return (
      <div>
        <div class="position--relative">
          <Header />
          <div class="background--light-gray position--relative">
            <div class="container border--left">
              <div class="row margin-top-lg margin-bottom-md position--relative z-index-1">
                <div class="col-md-8 col-centered">
                  <h1 class="font--headline sm-text-left">2018 Ruby on Rails Developer<br/>
                  Community Survey</h1>
                  <p class="margin-top-lg margin-bottom-lg">2002 members of the rails community gave us their thoughts on tools, frameworks, and workflows in order to see how the environment has changed. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Share/>
          <div class="background--light-gray padding-xl">
            <div class="h2">Demographics</div>
            <p>Here are some stats examples if we want to do quick stats. </p>
            <div class="row margin-top-md margin-bottom-xl justify-content-center">
              <div class="col-md-3 margin-xs background--darkest-gray padding-md">
                <p class="h1 montserrat">48</p>
                <p class="montserrat-text">countries represented in the survey</p>
              </div>
              <div class="col-md-3 margin-xs background--darkest-gray padding-md">
                <p class="h1 montserrat">60<span class="h5">%</span></p>
                <p class="montserrat-text">% of respondents reported they work in a product shop </p>
              </div>
              <div class="col-md-3 margin-xs background--darkest-gray padding-md">
                <p class="h1 montserrat">49<span class="h5">%</span></p>
                <p class="montserrat-text">of respondents have 7+ years of experience working with Rails (79% with 4+)</p>
              </div>
            </div>

            <div class="margin-top-xl">
              <div class="h2">In the Community</div>
              <p>Between developers in agencies, product shops, and freelancer/contractors, we noticed a few interesting trends.</p>
              <div class="row margin-md justify-content-center">
                <div class="col-md-3 text-left">
                  <p class="h6 margin-xs font--yellow">Agencies</p>
                  <p class="border--yellow padding-xs margin-xs background--darkest-gray">More authored gems</p>
                  <p class="border--yellow padding-xs margin-xs background--darkest-gray">More active in the community*</p>
                  <p class="border--yellow padding-xs margin-xs background--darkest-gray">More monolith, less microsite</p>
                </div>
                <div class="col-md-3 text-left">
                  <p class="h6 font--blue margin-xs">Product shops</p>
                  <p class="border--blue margin-xs  padding-xs background--darkest-gray">Tend to be on larger teams</p>
                  <p class="border--blue margin-xs  padding-xs background--darkest-gray">Better test coverage</p>
                </div>
                <div class="col-md-3 text-left">
                  <p class="h6 text-left font--teal margin-xs">Freelancers</p>
                  <p class="border--teal margin-xs  padding-xs background--darkest-gray">More likely to be self-taught</p>
                  <p class="border--teal margin-xs  padding-xs background--darkest-gray">More working in Rails for more than 10+ years</p>
                </div>
                <p>* ie. attending more conferences, authored more gem and attended more users groups.</p>
              </div>
            </div>
          </div>

          <div class="background--dark-gray padding-md">
            <div class="h2">Keeping Rails Up-To-Date</div>
            <RailsUpdates/>
            <RailsVersions/>
            <p class="margin-xl">Less than half of respondents felt that most or all of their apps were updated to most recent rails. Why not? Time. Over 30% responded that time was the only issue holding them back. Include content about how x% of the community can benefit from ongoing security updates/core team support while that means that y% are on their own. (We have 38%..so tack on content about the unsupported folks).</p>
          </div>

          <div class="padding-xl background--light-gray">
            <img src={quote} alt="speech bubble with quotation marks" />
            <div class="margin-lg">
              <p class="h1 montserrat">45%</p>
              <p>of respondents felt that most or all of their apps <span class="font--yellow">were updated</span> to the most recent version of Ruby in Rails.</p>
            </div>
            <div class="margin-lg">
              <p class="h1 montserrat">43%</p>
              <p>responded <span class="font--yellow">time</span> was the only issue holding them back.</p>
            </div>
          </div>

          <div class="background--dark-gray padding-xl">
            <p class="h2">Ruby Gems</p>
            <p class="h5">Which Rubygems do you love? And which frustrate you the most?</p>
            <p>Here’s a chart of all the gems that were named as the most loved and most frustrating, respectively – the size of the text correlates to how often it showed up in our results.</p>
            <div class="row margin-top-md justify-content-center">
              <div class="col-4">
                <p class="h5">Top 5 Gems</p>
                <ol>
                  <li>devise</li>
                  <li>sidekiq</li>
                  <li>pry</li>
                  <li>rspec</li>
                  <li>rubocop</li>
                </ol>
              </div>
              <div class="col-4">
                <p class="h5">Top 5 Gems</p>
                <ol>
                  <li>nokogiri</li>
                  <li>devise</li>
                  <li>activeadmin</li>
                  <li>activerecord</li>
                  <li>rspect</li>
                </ol>
              </div>
            </div>
            <div class="h4 margin-top-md">Most Loved Gems</div>
            <p>WordCloud to go here</p>
            <div class="h4 margin-top-md">Most Frustrating Gems</div>
            <p>WordCloud to go here</p>
          </div>

          <div class="padding-xl">
            <div class="h2 margin-bottom-md">Application Exceptions</div>
            <div class="h5">Which Application Exception tracking tools do you use in production?</div>
            <ApplicationExceptions/>
            <p>We included 11 options in this question and still had several choose “other”. There are a lot of options out there! And of course, there are a few using no tool at all.</p>
          </div>

          <div class="padding-xl">
            <div class="h5">With this increase in tools, Airbrake seems to be losing ground</div>
            <Airbrake/>
            <p>Airbrake (formerly Hoptoad) was at 53% back in 2012 and fell to 28% in 2014, 21% in 2016, and has continued to fall to 11% in 2018. One possible reason? The application exception tracking space has become more saturated over the years.</p>
          </div>

          <div class="padding-xl">
            <div class="h2 margin-bottom-md">New Relics Hold on the Market</div>
            <div class="h5">Which Application Exception tracking tools do you use in production?</div>
            <NewRelic/>
            <p>New Relic seems to have taken over in the app exception tracking space in the last few years. We have a few (unproven) ideas as to why that is. They’re the most frequently used choice in this survey for both performance tracking and uptime monitoring as well. As they offered exception tracking tools, perhaps companies decided to streamline and keep their monitoring tools all in one place.</p>
            <button class="btn-yellow montserrat h6 font--black margin-md">READ MORE ABOUT APPLICATION TRACKING</button>
          </div>

          <div class="padding-xl">
            <div class="h2 margin-bottom-md">Ruby Web Servers</div>
            <div class="h5">Which Rails Servers are you using in production?</div>
            <RailsServers/>
            <p>Puma has continued its upward climb as the Rails server of choice. Usage grew from 17% in 2014 to 35% in 2016 to 48% this year. While Unicorn was on par with Puma in 2016 (at 34% to Puma’s 35%), it has fallen below Passenger this year. Farewell, Unicorn in the coming years? We’ll have to wait and see.</p>
          </div>

          <div class="padding-xl">
            <div class="h2 margin-bottom-md">Databases</div>
            <div class="h5">Which databases do you prefer to use in production?</div>
            <Databases/>
            <p>PostgreSQL continues to lead in terms of usage and preference</p>
          </div>

          <div class="container padding-xl">
            <div class="h2 margin-bottom-md">Tools</div>
            <div class="h5">What code quality tools do you use?</div>
            <div class="row">
              <div class="col-12">
                <CodeQuality/>
              </div>
            </div>
            <p>After having code quality tools show up more frequently in conversations with peers and potential partners over the last year, we wanted to research what tools are being used most by our community.</p>
            <div class="row margin-top-xl justify-content-center">
              <p class="h5">Which Active Job adapters do you use to use to process background</p>
              <div class="col-8 margin-top-md">
                <ActiveJob/>
                <p>Sidekiq accounted for more than half of the active job adapters used to process background jobs. Delayed job came in second with 20%. This is one category with several players, with 11 options receiving at least a handful of votes.</p>
              </div>
            </div>
          </div>

          <div class="padding-xl">
            <div class="h2 margin-bottom-md">Containers</div>
            <Containers/>
          </div>

          <div class="padding-xl">
            <div class="h2 margin-bottom-md">Operating Systems</div>
            <div class="h5">Which operating system do you primarily develop your applications on?</div>
            <OperatingSystems/>
            <p>Puma has continued its upward climb as the Rails server of choice. Usage grew from 17% in 2014 to 35% in 2016 to 48% this year. While Unicorn was on par with Puma in 2016 (at 34% to Puma’s 35%), it has fallen below Passenger this year. Farewell, Unicorn in the coming years? We’ll have to wait and see.</p>
          </div>

          <div class="padding-xl background--darkest-gray">
            <div class="h2 margin-bottom-md">Conclusion</div>
            <p>What overarching themes did we uncover through this survey? For one, there are a lot  more tools being used in the Rails community than during our original survey in 2009. There’s more parity and a wider range of options in areas like x, y, and z.</p>
            <button class="btn-yellow montserrat h6 font--black margin-md">VIEW ALL RESPONSES FROM THE SURVEY</button>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
