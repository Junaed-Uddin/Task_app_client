import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import DataViewTable from '../DataViewTable/DataViewTable';
import Loader from '../Loader/Loader';
import './DataForm.css';

const DataForm = () => {

    const { data: storedData, isLoading, refetch } = useQuery({
        queryKey: ['taskView'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/taskView');
            const data = await res.json();
            return data.data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const task = form.task.value;
        const status = form.status.value;
        const details = { task, status };

        fetch('http://localhost:8000/addTasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(data.message);
                    refetch();
                    form.reset();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <section className='mt-20'>

            {/* input form  */}
            <form onSubmit={handleSubmit} className='mx-3'>
                <h2 className='text-2xl text-violet-500 font-bold'>Input Form</h2>
                <div className='flex justify-center gap-2 items-center flex-wrap mt-5'>
                    <input type="text" name='task' placeholder="Task Name" className="h-10 min-[444px]:flex-1 input input-bordered input-md input-primary rounded-md w-full max-w-xs" required />

                    <input type="text" placeholder="Status ( Active, Completed )" name='status' className="h-10 min-[444px]:flex-1 input input-bordered input-md input-primary rounded-md w-full max-w-xs" required />

                    <button className="bg-amber-500 text-black outline-none font-semibold px-5 h-10 rounded-md shadow-md">Submit</button>
                </div>
            </form>

            {/* data table  */}
            <div className='mt-6 mx-3'>
                <div className="overflow-x-auto max-w-4xl mx-auto">
                    <table className="table w-full border-2 overflow-x-scroll overflow-y-scroll table-auto text-center">
                        <thead>
                            <tr>
                                <th className='text-md'>#</th>
                                <th className='text-md'>Task Name</th>
                                <th className='text-md'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                storedData.map((data, index) =>
                                    <DataViewTable key={data._id}
                                        data={data}
                                        index={index}
                                    ></DataViewTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default DataForm;