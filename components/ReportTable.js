export default function ReportTable(props) {
    let totalOfHours =[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let totalOfTotal = 0
    return (
        <>

        <div  className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">

            <table>
                <thead>
                    <tr className='border border-collapse border-black table-auto bg-green-500' >
                        <th>Location</th>
                        { props.hours.map( hour =>{
                            return <th className='border border-collapse border-black table-auto'>{hour}</th>
                        }) }

                        <th className='border border-collapse border-black table-auto'>
                            Total
                        </th>
                    </tr>
                </thead>

                <tbody>
                    { props.Branches.map( Branche =>{
                        let total = 0
                        return(
                        <tr className='border border-collapse border-black table-auto bg-green-400'> 
                            <td className='border border-collapse border-black table-auto'>{Branche.location}</td>
                            { Branche.hourly_sales.map((item,indx)=>{
                                total += item
                                totalOfHours[indx] += item 
                               return(
                                <td className='border border-collapse border-black table-auto'>{item}</td>
                               )  
                            })}
                            <td className='border border-collapse border-black table-auto'>{total}</td>

                        </tr>
                        ) })

                    }

                </tbody>
                
                <tfoot>
                    <tr className='border border-collapse border-black table-auto bg-green-500' >
                        <td className='border border-collapse border-black table-auto' >Totals</td>

                        { totalOfHours.map( item =>{
                           totalOfTotal += item
                           return(
                            <td className='border border-collapse border-black table-auto' >{item}</td>
                           ) 
                        })
                        }

                        <td className='border border-collapse border-black table-auto'>{totalOfTotal}</td>

                    </tr>

                </tfoot>
            </table>

        </div>
        
        </>
       
    ) 
}