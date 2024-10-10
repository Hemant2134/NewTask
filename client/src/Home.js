import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/userSlice';
import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    const [editUser, setEditUser] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        dispatch(fetchUsers());
    };

    const handleEdit = (user) => {
        setEditUser(user);
        setUsername(user.username);
        setPassword(''); // Reset password for editing
    };

    const handleUpdate = async () => {
        await axios.put(`http://localhost:5000/api/users/${editUser._id}`, { username, password });
        setEditUser(null); // Clear edit state
        setUsername('');
        setPassword('');
        dispatch(fetchUsers());
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user.username}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {editUser && (
                <div>
                    <h3>Edit User</h3>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password (leave empty to keep current)"
                    />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={() => setEditUser(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default Home;
