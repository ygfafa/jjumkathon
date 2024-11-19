import { Button } from '@/components/shadcn/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/tabs'

const Home = () => {
    return (
        <main>
            <div className="h-[56px] flex justify-center items-center ">
                <h1 className="text-lg">오늘의 시세</h1>
            </div>

            <Tabs defaultValue="환율" className="mb-5">
                <TabsList>
                    <TabsTrigger value="환율">환율</TabsTrigger>
                    <TabsTrigger value="기름값">기름값</TabsTrigger>
                    <TabsTrigger value="식재료">식재료</TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="px-5">
                <h3 className="text-2xl whitespace-pre-line font-semibold mb-3">
                    오늘의 환율을
                    <br />
                    확인해보세요!
                </h3>

                <p className="text-muted-foreground">
                    2024.11.11 기준, 전일 대비
                </p>
            </div>

            <section className="h-[64px] flex flex-col justify-center px-5 py-2 fixed bottom-0 w-full max-w-[460px]">
                <Button className="w-full h-full text-lg">
                    오늘의 생활 시세 알아보기
                </Button>
            </section>
        </main>
    )
}

export default Home
