class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        counter = Counter(nums)

        max_freq = max(counter.values())

        max_freq_elem = [num for num , freq in counter.items() if freq == max_freq]

        tot_freq = max_freq * len(max_freq_elem)

        return tot_freq