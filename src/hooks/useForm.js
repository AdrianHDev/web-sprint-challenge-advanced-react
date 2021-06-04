import { useState } from "react";

// write your custom hook here to control your checkout form
const useForm = (initValue) => {
    const [key, setKey] = useState('', initValue)
    return [key, setKey]
}

export default useForm;