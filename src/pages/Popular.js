import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import PopularComponent from './../components/popular/PopularComponent'

class Popular extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            filters: ['twitter', 'youtube', 'instagram']
        }
        this.updateFeedFilters = this.updateFeedFilters.bind(this)
    }

    updateFeedFilters(newFilters) {
        this.setState({filters: newFilters})
    }

    componentDidMount() {
        fetch('http://40.127.101.155/api/twitter?request_type=popular')
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }

    render() {

        let filteredContent = this.state.data.filter(content => this.state.filters.includes(content.platform.toLowerCase()))
        let FeedContent = filteredContent.map(influencer => {
            return <PopularComponent key={influencer.tweet_created_at} data={influencer} />
        })

        return (
            <div>
                <Header title={'Popular'} />
                <main className='popular-feed-content'>
                    {FeedContent}
                </main>
                <Footer updateFeedFilters={this.updateFeedFilters} />
            </div>
        )
    }
}

export default Popular
