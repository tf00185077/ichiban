const MainCard =  ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-4/5 max-w-[1400px] mx-auto h-full bg-white p-[30px]">
            {children}
        </div>
    )
}
export default MainCard