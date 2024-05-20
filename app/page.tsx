import OpenAIAssistant from "@/app/ui/openai-assistant";


export default function Home() {
  return (
    <main>
      <div className="mx-auto mb-12 max-w-lg text-center">
        <div className="m-4">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">리걸케어 덴탈봇</h1>
          <div className="mb-6 text-normal font-normal text-gray-500">
            병원 운영 중 발생한 법률 이슈에 대해 물어보세요.
          </div>
        </div>
        <OpenAIAssistant 
          assistantId="asst_4WBZX0FS0GlPAHIFUfDe4kzS"
          greeting="안녕하세요. 리걸케어 덴탈봇입니다. 무엇을 도와드릴까요?"
        />
      </div>
    </main>
  );
}
