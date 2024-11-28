import ChevronRightIcon from '@/assets/icons/chevron-right.svg'

import {
  Meta,
  MetaAvatar,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'

type AdItem = {
  image: string
  title: string
  description: string
}
type AdListCardProps = {
  title: string
  description: string
  items: AdItem[]
}

const AdListCard = ({ title, description, items }: AdListCardProps) => {
  return (
    <section className="px-20 py-32 bg-gray-50">
      <h3 className="mb-6 text-20 font-bold">{title}</h3>
      <p className="text-16 text-primary mb-20">{description}</p>

      <div className=" relative space-y-4 rounded-16 shadow bg-white py-12">
        <div className="absolute right-8 top-8 rounded-250 h-[20px] inline-flex justify-center items-center px-8 text-10 font-bold text-[#606A76] bg-[#F0F1F2]">
          AD
        </div>

        {items.map((item, index) => (
          <Meta className="p-20" key={index}>
            <MetaAvatar src={item.image} className="mr-12" />
            <MetaContent>
              <MetaTitle className="text-primary">{item.title}</MetaTitle>
              <MetaDescription className="font-bold">
                {item.description}
              </MetaDescription>
            </MetaContent>
            <MetaExtra>
              <ChevronRightIcon />
            </MetaExtra>
          </Meta>
        ))}
      </div>
    </section>
  )
}

export default AdListCard
