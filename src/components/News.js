import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Proptypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
  };

  static propTypes = {
    country: Proptypes.string,
    category: Proptypes.string,
    pageSize: Proptypes.number,
  };

  articles = [
    {
      source: {
        id: null,
        name: "WABC-TV",
      },
      author: null,
      title:
        "Mega Millions winning numbers live drawing tonight: $1.35B up for grabs on Friday the 13th - WABC-TV",
      description:
        "The winning numbers are in for Friday the 13th's Mega Millions drawing worth $1.35 billion.",
      url: "https://abc7ny.com/mega-millions-drawing-megamillions-jackpot-winning-numbers/12696533/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/12685608_meag-millions.jpg?w=1600",
      publishedAt: "2023-01-14T03:48:21Z",
      content:
        "NEW YORK (WABC) -- The numbers for an estimated $1.35 billion Mega Millions jackpot were drawn and now all hopeful players can do is wait until word of a possible winner.\r\nThe numbers drawn late Frid… [+4914 chars]",
    },
    {
      source: {
        id: null,
        name: "PEOPLE",
      },
      author: "https://www.facebook.com/peoplemag",
      title:
        "Chrissy Teigen and John Legend Welcome New Baby: 'What a Blessed Day' - Yahoo News",
      description: "Chrissy Teigen and John Legend welcomed a baby on Friday.",
      url: "https://people.com/parents/chrissy-teigen-john-legend-welcome-baby/",
      urlToImage:
        "https://people.com/thmb/IEBs04xSPY6befY7CJHX_nHpb80=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/chrissy-teigen-john-legend-kids-a824b8b1a7aa4414b67717e3d698f9c8.jpg",
      publishedAt: "2023-01-14T03:43:00Z",
      content:
        "John Legend and Chrissy Teigen's family just got a little bigger!\r\nThe couple's baby was born on Friday, Jan. 13, the proud father confirmed hours after his child's arrival.\r\nLegend, 43, told a crowd… [+2063 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Jack Baer",
      title:
        "Spurs break NBA attendance record with 68,323 fans at the Alamodome - Yahoo Sports",
      description:
        "Spurs fans combined to break a record more than two decades old.",
      url: "https://sports.yahoo.com/spurs-break-nba-attendance-record-with-68323-fans-at-the-alamodome-024701024.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/B7tZbcOGfyAuY_UmfmGZPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03Mjc-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/805b1590-93b5-11ed-af7d-3953cbe977a8",
      publishedAt: "2023-01-14T02:47:00Z",
      content:
        "Spurs fans turned up big for their anniversary celebration. (Photo by Ronald Cortes/Getty Images)\r\nThe San Antonio Spurs might be 13-30, but they've got the entire NBA beat in one area of the record … [+1855 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author:
        "Maegan Vazquez, Marshall Cohen, MJ Lee, Arlette Saenz, Zachary Cohen",
      title:
        "What we know about Joe Biden's private office where classified documents were found - CNN",
      description:
        "It was an office fit for a former vice president working in Washington -- dark hardwood floors, plush seating and a spacious desk set to a lofty backdrop of the Capitol building.",
      url: "https://www.cnn.com/2023/01/13/politics/biden-penn-center-what-we-know/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230113164318-hp-only-20230113-biden-docs-floor-plan-hp.png?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-14T02:14:00Z",
      content:
        "It was an office fit for a former vice president working in Washington dark hardwood floors, plush seating and a spacious desk set to a lofty backdrop of the Capitol building. \r\nThis week, what took … [+5145 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Shayna Jacobs, Isaac Arnsdorf",
      title:
        "Unsealed Trump deposition accuses E. Jean Carroll of saying she enjoys rape - The Washington Post",
      description:
        "In a deposition unsealed Friday, the former president denied raping writer E. Jean Carroll but also falsely said she claimed to enjoy being assaulted.",
      url: "https://www.washingtonpost.com/national-security/2023/01/13/trump-carroll-rape-deposition/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PL42R2UTNMI63EHYKNTBVROZXE.jpg&w=1440",
      publishedAt: "2023-01-14T02:09:05Z",
      content:
        "Comment on this story\r\nNEW YORK Donald Trump used a sworn deposition in a case brought by his sexual assault accuser E. Jean Carroll to continue calling her a liar and to claim she is mentally ill de… [+6748 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Ellise Shafer",
      title:
        "‘Elvis’ Star Austin Butler and Director Baz Luhrmann Honor Lisa Marie Presley: ‘My Heart Is Completely Shattered’ - Variety",
      description:
        "“Elvis” director Baz Luhrmann and star Austin Butler have paid tribute to Lisa Marie Presley, the musician and only child of Elvis Presley, who died on Thursday at the age of 54 after s…",
      url: "https://variety.com/2023/music/news/lisa-marie-presley-dead-baz-luhrmann-elvis-1235489045/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2023/01/ER3-1029rv2-1.jpg?w=1000&h=563&crop=1",
      publishedAt: "2023-01-14T01:45:00Z",
      content:
        "“Elvis” director Baz Luhrmann and star Austin Butler have paid tribute to Lisa Marie Presley, the musician and only child of Elvis Presley, who died on Thursday at the age of 54 after suffering cardi… [+2253 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "Treasury secretary: US to reach debt ceiling on Thursday - The Guardian",
      description:
        "Janet Yellen told Congress that ‘extraordinary measures’ would be taken to avoid default until legislation is passed to raise ceiling",
      url: "https://www.theguardian.com/business/2023/jan/13/treasury-secretary-janet-yellen-debt-ceiling",
      urlToImage:
        "https://i.guim.co.uk/img/media/4396b2fdcd6bc2309ec9b4fd8b0b30583a70ecbd/0_148_3896_2337/master/3896.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=02ccf976819d926a60e12fb4c05b4d2e",
      publishedAt: "2023-01-14T01:35:00Z",
      content:
        "Janet Yellen, the US treasury secretary, has notified Congress that the US is projected to reach its debt limit on Thursday, 19 January, and will then resort to extraordinary measures to avoid defaul… [+3985 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Oli Coleman",
      title:
        "Kim Kardashian 'hates' Kanye West's new 'wife' Bianca Censori - Page Six",
      description:
        "The world was shocked by news that the rapper has married one of his staffers, Bianca Censori. But we know someone who won’t be surprised — his ex-wife.",
      url: "https://pagesix.com/2023/01/13/kim-kardashian-hates-kanye-wests-new-wife-bianca-censori/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2023/01/kim-kardashian-hates-kanye-west-wife-Bianca-Censori.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2023-01-14T00:40:00Z",
      content:
        "The world was shocked by news that Kanye West has married one of his staffers, Bianca Censori. But we know someone who won’t be surprised Kim Kardashian. \r\nInsiders say that the former Mrs. West has … [+1924 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "New Zealand egg shortage threatens pavlova - BBC",
      description:
        "A government ban on battery-caged hens has led to a shortage of eggs in New Zealand.",
      url: "https://www.bbc.com/news/world-asia-64267741",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/DF8D/production/_128292275_gettyimages-489142880.jpg",
      publishedAt: "2023-01-14T00:29:30Z",
      content:
        "New Zealand is in the grip of a nationwide egg shortage which is driving up wholesale prices and putting its much-loved dessert, pavlova, at risk. \r\nSupermarket shelves are bare and some stores are p… [+3623 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Brenda Goodman",
      title:
        "CDC identifies possible safety issue with Pfizer's updated Covid-19 vaccine but says people should still get boosted - CNN",
      description:
        "The US Centers for Disease Control and Prevention said Friday that there is a possible safety issue with the bivalent Covid-19 vaccine made by Pfizer and BioNTech but that it is unlikely to represent a true risk. The agency said it continues to recommend that…",
      url: "https://www.cnn.com/2023/01/13/health/pfizer-bivalent-booster-safety-cdc/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230113155827-01-pfizer-biontech-booster.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-13T23:50:00Z",
      content:
        "The US Centers for Disease Control and Prevention said Friday that there is a possible safety issue with the bivalent Covid-19 vaccine made by Pfizer and BioNTech but that it is unlikely to represent… [+5126 chars]",
    },
    {
      source: {
        id: "nfl-news",
        name: "NFL News",
      },
      author: "Bobby Kownack",
      title:
        "Saints' Mickey Loomis retaining HC Dennis Allen, wants to 'maximize' Sean Payton's value in any trade - NFL.com",
      description:
        "New Orleans Saints general manager Mickey Loomis mentioned valuing stability in his decision to bring head coach Dennis Allen back for the 2023 season. He's also intent on receiving appropriate value in any trade the team might make involving Sean Payton.",
      url: "https://www.nfl.com/news/saints-mickey-loomis-retaining-hc-dennis-allen-wants-to-maximize-sean-payton",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/kpyzic5w7htqlrz0zrvb",
      publishedAt: "2023-01-13T23:49:00Z",
      content:
        "The New Orleans Saints just endured their worst season since their 7-9 campaign in 2016, but executive vice president and general manager Mickey Loomis' only plans to move a head coach affiliated wit… [+3934 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Jeff Stein, Leigh Ann Caldwell, Theodoric Meyer",
      title:
        "Jan. 19 debt limit deadline looms; House GOP prepares contingency plan - The Washington Post",
      description:
        "The proposal, still under discussion, would direct the Treasury Department to prioritize certain payments if the United States hits the debt ceiling.",
      url: "https://www.washingtonpost.com/us-policy/2023/01/13/debt-ceiling-gop-plan/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G6X2OD5XVXZLFIEPJZFAVV4PVA.jpg&w=1440",
      publishedAt: "2023-01-13T23:47:48Z",
      content:
        "Comment on this story\r\nHouse Republicans are preparing a plan telling the Treasury Department what to do if Congress and the White House dont agree to lift the nations debt limit later this year, und… [+9198 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Tara Subramaniam, Vedika Sud",
      title:
        "A hairline crack became a 3-foot chasm. That's when he knew they had to leave - CNN",
      description:
        "For years, residents in the northern Indian city of Joshimath have complained to local officials that their homes are sinking. Now authorities are being forced to take action, evacuating nearly 100 families in the last week and expediting the arrival of exper…",
      url: "https://www.cnn.com/2023/01/13/india/india-joshimath-uttarakhand-sinking-city-intl-hnk-dst/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230113014811-01-suraj-kaparuwan-home-cracked.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-13T23:47:00Z",
      content:
        "For years, residents in the northern Indian city of Joshimath have complained to local officials that their homes are sinking. Now authorities are being forced to take action, evacuating nearly 100 f… [+6675 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Cancer deaths drop, but more late-stage prostate cancer diagnoses spark concerns - PBS NewsHour",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0NropqwiYQ4",
      urlToImage: null,
      publishedAt: "2023-01-13T23:32:37Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Three reasons Seahawks will shock 49ers in wild-card round: Brock Purdy hits rookie wall vs. common opponent - CBS Sports",
      description: "Seattle is a long shot, but it has a chance at an upset",
      url: "https://www.cbssports.com/nfl/news/three-reasons-seahawks-will-shock-49ers-in-wild-card-round-brock-purdy-hits-rookie-wall-vs-common-opponent/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/01/13/0d6c23b2-c7e5-4a8f-a8ab-ab7be472aa74/thumbnail/1200x675/235e2a6395904f4506c573ad5097773e/brock-purdy.jpg",
      publishedAt: "2023-01-13T22:46:25Z",
      content:
        "The Seattle Seahawks are the definition of an underdog. Written off before the season with Russell Wilson traded and Geno Smith becoming the starting quarterback, few gave the Seahawks an opportunity… [+4904 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Amanda Macias, Natasha Turak",
      title:
        "Ukraine war live updates: Kyiv denies Russia's claim of control over contested Soledar; Ukraine set to receive more Western tanks - CNBC",
      description:
        "Ukraine is denying Russia's claim of control over Soledar. If true, it would be Moscow's first significant victory in months.",
      url: "https://www.cnbc.com/2023/01/13/live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107178585-1673632584493-AP23009371467652.jpg?v=1673632746&w=1920&h=1080",
      publishedAt: "2023-01-13T22:44:00Z",
      content:
        'Ukrainian Defense Minister Oleksii Reznikov described his country as being a "de facto" member of the NATO alliance. He added that he is sure Ukraine will receive the advanced weaponry it\'s long soug… [+1701 chars]',
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Michelle De Pacina",
      title:
        "Woman stabbed teen multiple times on Indiana bus for being Chinese, according to affidavit - Yahoo News",
      description:
        "A woman was arrested for stabbing an 18-year-old girl in the head multiple times on a Bloomington Transit bus in Indiana.  Billie R. Davis, 56, repeatedly...",
      url: "https://news.yahoo.com/woman-stabbed-teen-multiple-times-223156189.html",
      urlToImage:
        "https://media.zenfs.com/en/nextshark_articles_509/1ee7333d25c99f487923bc0af62317ff",
      publishedAt: "2023-01-13T22:31:56Z",
      content:
        "[Source]\r\nA woman was arrested for stabbing an 18-year-old girl in the head multiple times on a Bloomington Transit bus in Indiana. \r\nBillie R. Davis, 56, repeatedly stabbed the teen using a pocket k… [+2032 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Elana Fishman",
      title:
        "All about the Elizabeth Arden cream that saved Prince Harry's frostbitten penis - Page Six",
      description:
        "It’s a cult-favorite formula that’s a go-to for many members of the royal family … including, now, Harry’s member.",
      url: "https://pagesix.com/2023/01/13/the-elizabeth-arden-cream-that-saved-prince-harrys-frostbitten-penis/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2023/01/prince-harry-elizabeth-arden-cream.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2023-01-13T21:57:00Z",
      content:
        "It works on chapped lips, dry cuticles  and even the crown jewels.\r\nOf all the bombshells from Prince Harry’s buzzy new memoir, “Spare,” few have captivated the internet quite like the Duke of Sussex… [+2798 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "What's known, and what's next, in University of Idaho murders and for suspect Bryan Kohberger - 6abc Philadelphia",
      description:
        "The criminal case against a man accused of stabbing to death four University of Idaho students last November is underway, but it will likely be months or lon...",
      url: "https://www.youtube.com/watch?v=brsS9GA2-dY",
      urlToImage: "https://i.ytimg.com/vi/brsS9GA2-dY/maxresdefault.jpg",
      publishedAt: "2023-01-13T21:44:26Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Lansing State Journal",
      },
      author: ", Lansing State Journal",
      title:
        "MSU professor, NASA team, discover new planet that could sustain life - Lansing State Journal",
      description:
        "Michigan State's Joey Rodriguez helped confirm the existance of the planet in the habitable zone around its star, nearly 100 light years away",
      url: "https://www.lansingstatejournal.com/story/news/2023/01/13/michigan-state-professor-nasa-team-discover-planet-that-could-sustain-life/69807157007/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/01/13/PLSJ/30d5f01a-0eea-4728-b1f4-273d9bc041bf-toi700e_art.jpg?auto=webp&crop=4778,2688,x21,y0&format=pjpg&width=1200",
      publishedAt: "2023-01-13T20:51:35Z",
      content:
        "EAST LANSING After more than a year of extra-stellar detective work, a Michigan State University professor has helped NASA confirm the existence of a new planet about 100 light years away that could … [+3769 chars]",
    },
  ];

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    // console.log("jey");
    this.state = {
      articles: this.articles,
      loading: false,
      pages: 1,
      totalResult: 0,
    };
    document.title = `News24-${this.capitalize(this.props.category)}`;
  }
  funcComplex = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0d2b81d6f7ca40d5bdd3b338fa12a8de&page=${this.state.pages}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult,
      loading: false,
    });
  };

  async componentDidMount() {
    this.funcComplex();
  }

  handleNextClick = async () => {
    if (
      this.state.pages + 1 >
      Math.ceil(this.state.totalResult / this.props.pageSize)
    ) {
    } else {
      this.setState({
        pages: this.state.pages + 1,
      });
      this.funcComplex();
    }
  };

  handlePrevClick = async () => {
    this.setState({
      pages: this.state.pages - 1,
    });
    this.funcComplex();
  };
  fetchMoreData = async () => {
    // a fake async api call like which sends
        this.setState({
          pages:this.state.pages+1

        })
        // this.funcComplex();
         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0d2b81d6f7ca40d5bdd3b338fa12a8de&page=${this.state.pages}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResult,
      loading: false,
    });
      }
      
      render(){
    return (
      <>
   
        <h1 className="text-center my-4">
          {`News24-Top-${this.capitalize(this.props.category)} `}Headlines
        </h1>
       
           {this.state.loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          
          loader={<Spinner />}
        >  <div className="container">
          <div className="row">
            {this.state.articles.map((elements) => {
              return (
                <div className="col-md-4" key={elements.url}>
                  <NewsItem
                    title={!elements.title ? " " : elements.title.slice(0, 18)}
                    description={
                      !elements.description
                        ? " "
                        : elements.description.slice(0, 88)
                    }
                    imageUrl={elements.urlToImage}
                    newsUrl={elements.url}
                    author={!elements.author ? "Unknown" : elements.author}
                    date={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
                
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      
      </>
    );
  }
}

