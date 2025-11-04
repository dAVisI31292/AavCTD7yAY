// 代码生成时间: 2025-11-04 12:39:43
const axios = require('axios');
const cheerio = require('cheerio');

// 定义一个异步函数用于获取知识点推荐
async function fetchKnowledgeRecommendations(url) {
  // 使用axios发送GET请求
  try {
    const response = await axios.get(url);
    const html = response.data;

    // 使用cheerio解析HTML
    const $ = cheerio.load(html);

    // 提取知识点推荐列表
    const recommendations = [];
    $('ul.knowledge-list li').each((index, element) => {
      const title = $(element).find('a').text().trim();
      const link = $(element).find('a').attr('href');
      recommendations.push({ title, link });
    });

    // 返回知识点推荐列表
    return recommendations;
  } catch (error) {
    // 错误处理
    console.error('Failed to fetch knowledge recommendations:', error);
    throw error;
  }
}

// 导出函数
module.exports = fetchKnowledgeRecommendations;