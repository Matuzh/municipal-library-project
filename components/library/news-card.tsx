'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import type { News } from '@/types'

interface NewsCardProps {
  news: News
  delay?: number
}

export function NewsCard({ news, delay = 0 }: NewsCardProps) {
  const getBadgeVariant = (category: News['category']) => {
    switch (category) {
      case 'urgent':
        return 'urgent'
      case 'new':
        return 'success'
      case 'program':
        return 'secondary'
      default:
        return 'default'
    }
  }

  const getCategoryLabel = (category: News['category']) => {
    switch (category) {
      case 'urgent':
        return '⚡ Pilne'
      case 'new':
        return '✨ Nowość'
      case 'program':
        return '📚 Program'
      default:
        return '📅 Wydarzenie'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full bg-gradient-to-br from-amber-50 to-white border-l-4 border-l-accent-warm relative overflow-hidden group">
        <div className="absolute top-8 right-8 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
          {news.icon}
        </div>
        
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge variant={getBadgeVariant(news.category)}>
              {getCategoryLabel(news.category)}
            </Badge>
          </div>
          <CardTitle className="text-xl">{news.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
            <Calendar className="h-4 w-4" />
            {news.date}
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-base leading-relaxed">{news.description}</p>
        </CardContent>
        
        <CardFooter>
          <Button asChild size="sm" variant="warning" className="w-full">
            <Link href={news.link}>
              Szczegóły wydarzenia →
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
