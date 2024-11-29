import ChipButton from '@/components/chip-button'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import PageBottomFixedArea from '@/components/layouts/page-bottom-fixed-area'
import { PageHeader } from '@/components/layouts/page-header'
import { Button } from '@/components/shadcn/button'

const LivingBenefitsDetailPage = async () => {
  return (
    <Page hasFixedBottomArea>
      <PageHeader title="생활물가 알리미" />
      <PageBody noBodyPadding>
        <section className="px-20">
          <ChipButton selected className="mb-4">
            생활혜택
          </ChipButton>
          <div className="mb-32">
            <h2 className="text-24 font-bold">
              지원금 받으면서
              <br />
              인터넷 요금 줄이기
            </h2>
            <p className="text-16 font-semibold text-primary">
              최대 25만원 적용 혜택
            </p>
          </div>
        </section>

        <img src="/images/living-benefits.png" />
      </PageBody>

      <PageBottomFixedArea>
        <Button className="w-full" size="lg">
          인터넷 지원금 조회하기
        </Button>
      </PageBottomFixedArea>
    </Page>
  )
}

export default LivingBenefitsDetailPage
