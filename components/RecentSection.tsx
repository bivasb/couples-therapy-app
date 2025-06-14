import ArticleCard from './ArticleCard'

const recentArticles = [
  {
    id: 1,
    title: "Eight Tips For Approaching Women In The Right Way",
    description: "Learn respectful and effective ways to start conversations and build meaningful connections.",
    author: "Medically reviewed by Melissa Guarnaccia, LCSW",
    image: "Couple talking outdoors",
  },
  {
    id: 2,
    title: "Utilize Couples Counseling Worksheets To Enhance Mental Health And Therapy",
    description: "Discover helpful worksheets and exercises to strengthen your relationship through therapy.",
    author: "Medically reviewed by Melissa Guarnaccia, LCSW",
    image: "Couple working together",
  },
  {
    id: 3,
    title: "What Is Text Therapy? Text-Based Therapy & Mental Health",
    description: "Explore the benefits and effectiveness of text-based therapy for mental health support.",
    author: "Medically reviewed by Melissa Guarnaccia, LCSW",
    image: "Person using phone",
  }
]

const popularArticles = [
  {
    id: 4,
    title: "Understanding The Stages Of A Healthy Relationship",
    description: "Learn about the different phases relationships go through and how to navigate them successfully.",
    author: "Medically reviewed by Melissa Guarnaccia, LCSW",
    image: "Happy couple",
  },
  {
    id: 5,
    title: "Communication Skills Every Couple Should Master",
    description: "Essential communication techniques to improve understanding and connection in your relationship.",
    author: "Medically reviewed by Melissa Guarnaccia, LCSW",
    image: "Couple communicating",
  },
  {
    id: 6,
    title: "When To Consider Couples Therapy: Key Signs",
    description: "Recognize the important indicators that suggest professional support could benefit your relationship.",
    author: "Medically reviewed by Melissa Guarnaccia, LCSW",
    image: "Therapy session",
  }
]

export default function RecentSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Recent Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-cyan-400">●</span> Recent
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent w-64"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        {/* Popular Section */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-purple-600">●</span> Popular
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}