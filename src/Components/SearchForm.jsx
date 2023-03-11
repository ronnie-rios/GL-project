import { useState } from 'react';
import { useSearch } from '../store/searchContext';


const SearchForm = () => {
    const [formData, setFormData] = useState({
        name: ''
    });
    const { setNameSearch } = useSearch();
  
    const formHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setFormData((prev) => {
        return { ...prev, [name]: value}
      })
    };
    
    const formSubmit = (e) => {
        e.preventDefault();
        setNameSearch(formData);
        setFormData({
            name: ''
        })
    }

    return (
    <div>
        <form onSubmit={formSubmit}> 
            <div className='my-2'>
                <label className='text-white'>Search below:</label>
            </div>
            <div className='my-2'>
                <input 
                    placeholder='ex: google'
                    required
                    className='bg-black rounded p-1 text-white border border-gray focus:outline-none  focus:border-blue px-2' type="text" 
                    name='name' 
                    value={formData.name}
                    onChange={formHandler}
                />
            </div>
            <div className='mt-2'>
                <button className='bg-btn-gray border border-btn-gray hover:border-white p-2 rounded mt-4'>Search</button>
            </div>
        </form>
    </div>
    )
}

export default SearchForm