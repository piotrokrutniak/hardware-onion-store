import OptionCard from "../../ui components/optioncard";

export default function AdminPanel({...props}){
    return(
        <>
        <div className="p-10 pb-4 text-5xl font-semibold"><div className="border-b-2 border-white-900/80 pb-10 pr-5">Admin Panel</div></div>
        <div className="grid grid-flow-row gap-5 auto-cols-min-54 grid-cols-3 p-10 
                            max-xl:grid-cols-2 
                            max-xs:grid-cols-1 
                            ">
                
            <OptionCard label="Products" href="/admin-panel/products"/>
            <OptionCard label="Manufacturers"/>
            <OptionCard label="Product Types"/>
            <OptionCard label="Discounts"/>
            <OptionCard label="Manage Users"/>
            <OptionCard label="Manage Orders"/>

        </div>
        </>
    )
}

