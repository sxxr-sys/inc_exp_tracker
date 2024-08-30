import { Logo } from "./icons"

export const Loading = () => {
    return <div className="flex flex-col items-center justify-center h-screen gap-12">
        <div className="flex items-center  gap-[17.642px] p-[10.081px]">
            <Logo className="size-11" />
            <h1 className="font-semibold text-[32px] leading-7">Geld</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
            <div className="border-[#E5E5E5] border-t-[#0166FF] border-solid border-[3px] size-8 rounded-full animate-spin" />
            <p className="text-[#0F172A] font-semibold leading-6">Түр хүлээнэ үү...</p>
        </div>
    </div>
}