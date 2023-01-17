//** React Imports
import { useEffect } from 'react'

/**
 * Nơi này sẽ quyết định layout được sử dụng
 * Nhận layout từ localStorage hoặc từ user profile
 * Kết hợp react-redux
 * 
 * @returns layout
 */

export const useLayout = () => {
    return {
        layout: 'default'
    }
}
